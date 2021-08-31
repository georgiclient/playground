## Problem
A man has travelled around Bulgaria with buses from town to town.
After he arrived at his final destination he had in his bag 10 tickets which were jumbled. 
All the tickets had start and end destination written on them. For example one random ticket in his bag was from Plovdiv to Sofia [PLD - SOF]. 
The man did not visit a town twice and all the towns were with unique names (codes).
Write an algorithm in JavaScript that will discover the route of the man based on the 10 tickets in his bag.

## Solution
- Generates array of Tickets
- Shuffle the tickets / as they are picked randomly out of the pocket
- Clean and normalise tickets
- Find start destination
- Build the route from start destination

## Usage
``` node tickets.js```

You will see 10 tickets and then the route of the journey.

You have the ability to pass an argument for number of tickets that needs to be generated.
``` node tickets.js 99```

99 tickets = 100 destinations including the start destination
