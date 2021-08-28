// Generate tickets
const generateTickets = (count) => {
  let tickets = [];
  i = 1;
  while (i <= count) {
    tickets = [...tickets, `CITY${i} to CITY${i + 1} [COD${i} - COD${i + 1}]`];
    i++;
  }
  return tickets;
};

// Clean and normalise data
const cleanTicket = (ticket) => {
  const from = ticket.substr(0, ticket.lastIndexOf(" to "));
  const to = ticket.substr(
    ticket.lastIndexOf(" to ") + 4,
    ticket.lastIndexOf(" [") - (ticket.lastIndexOf(" to ") + 4)
  );
  const codesRegExp = new RegExp(/\[[^\]]*\]/);
  const codes = ticket
    .match(codesRegExp)[0]
    .replace("[", "")
    .replace("]", "")
    .split(" - ");

  return {
    from,
    to,
    fromCode: codes[0],
    toCode: codes[1],
  };
};

// Randomize array Fisher-Yates (aka Knuth) Shuffle
// https://stackoverflow.com/a/12646864
const shuffleArray = (array) => {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

module.exports = {
  generateTickets: function (count) {
    return generateTickets(count);
  },
  cleanTicket: function (ticket) {
    return cleanTicket(ticket);
  },
  shuffleArray: function (array) {
    return shuffleArray(array);
  },
};
