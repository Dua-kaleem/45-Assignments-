// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.



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
//create an array of magicians names
const magicians_Names = ["Roger Lapin", "David Copperfield", "Paul Daniels", "penn & teller"];
//call make_great to modify the array
const  greatMagicians = make_great(magicians_Names);
showMagicians(greatMagicians);







