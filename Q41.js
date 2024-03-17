"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
//Array of magicians name
let magicians_Names = ["Roger Lapin", "David Copperfield", "Paul Daniels", "penn & teller"];
//function with print the name of each magician in the array
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians_Names);
