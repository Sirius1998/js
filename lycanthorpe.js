/*
phi  = events: true(squirrel and pizza) * false(squirrel and pizza) * true(squirrel) and false(pizza) * false(squirrel) and true(pizza) /
       frequency: (squirrel: 5 times ) * (no squirrel: 85 times ) * (pizza: 10 times) * (no pizza: 80 times)
phi = 1 * 76 - 4 * 9 / Math.sqrt(5 * 85 * 10 * 80)
phi = 40 / Math.sqrt(340000);
phi = 0.069
*/

let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teetg"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
    return (table[0] * table[1] - table[2] * table[3]) / Math.sqrt((table[0] + table[2]) *
                (table[1] + table[3]) *
                (table[0] + table[3]) *
                (table[1] + table[2]));
    }
console.log(phi([1, 76, 4, 9]));
