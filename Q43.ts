// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.


//create the make_great function
function make_great(magicians:string[]){
    return magicians.map(magician => `The Great ${magician}`)
}
//create showMagicians function
function showMagicians(magicians:string[]){
    for( const magician of magicians){
        console.log(magician);
    }
}
//create an array of magician names
const originalMagicianName = ["Roger Lapin", "David Copperfield", "Paul Daniels", "penn & teller"];

//make a copy of the array
const coppiedMagicianName = [...originalMagicianName];

//call make great with the coppied array
const greatMagicians = make_great(coppiedMagicianName);

//call showMagicians to show the original names
console.log("original Magicians");
showMagicians(originalMagicianName);

// CALL showMagicians to show the array with " the great" addead
console.log("\nmagicians with the 'the great':");
showMagicians(greatMagicians);
