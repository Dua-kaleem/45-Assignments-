"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicians_Names = ["Roger Lapin", "David Copperfield", "Paul Daniels", "penn & teller"];
const greatMagicians = make_great(magicians_Names);
showMagicians(greatMagicians);
