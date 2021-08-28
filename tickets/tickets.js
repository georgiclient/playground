const helpers = require("./helpers");

const start = new Date().getTime();

const myArgs = process.argv.slice(2);
const numberOfTickets = parseInt(myArgs[0]) || 10;

const generatedTickets = helpers.generateTickets(numberOfTickets);
const myTickets = helpers.shuffleArray(generatedTickets);

// From destination
let from = [];

// To destination
let to = [];

// Index map from
let fromIndexMap = {};
// Destination codes
let codes = {};

// Route destinations
let route = [];

function getRoute(tickets) {
  // current ticket number
  let currentTicketNumber = 1;

  // Clean and normalise tickets
  function cleanAndNormaliseTickets(tickets) {
    tickets.forEach((ticket, ticketIndex) => {
      const data = helpers.cleanTicket(ticket);
      from.push(data.from);
      to.push(data.to);
      fromIndexMap[data.from] = ticketIndex;
      // TODO: generate destination to destinationCode better to avoid uselss assigments
      // Need this for the first destination or the last destination within the same iteration
      codes[data.from] = data.fromCode;
      codes[data.to] = data.toCode;
    });
  }

  /**
   * Builds route based on the normalised data
   * 
   * @param number fromIndex - index of destination a (first destination on a ticket)
   * @param number ticketsCount - total number of tickets
   */
  function buildRoute(fromIndex, ticketsCount) {
    if (typeof fromIndex !== "undefined") {
      let a = from[fromIndex];
      let b = to[fromIndex];

      // First destination (from)
      if (!route.length) {
        route = [`${a} (${codes[a]})`];
      }
      // Any destination (to)
      route = [...route, `${b} (${codes[b]})`];

      if (currentTicketNumber < ticketsCount) {
        currentTicketNumber++;
        // each destination (to) is destination (from) on the next ticket from the journey
        buildRoute(fromIndexMap[b], ticketsCount);
      }
    }
  }

  // Clean and normalise
  cleanAndNormaliseTickets(tickets);

  // Find start destination
  const startDestination = from.find(
    (destination) => !to.includes(destination)
  );

  buildRoute(fromIndexMap[startDestination], tickets.length);

  // Jorney trough destinations
  return route;
}

console.log("##### START TICKETS FROM POCKET #####");
console.log(myTickets);
console.log("##### END TICKETS FROM POCKET #####");

getRoute(myTickets);
console.log("##### START JOURNEY #####");
console.log(route);
console.log("##### END JOURNEY #####");

const end = new Date().getTime();
const time = end - start;
console.log(`Execution time: ${time}ms`);
