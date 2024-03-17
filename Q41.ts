// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.




function showMagicians(magicians:string[]){
    for( const magician of magicians){
        console.log(magician);
    }
}
const magicians_Names = ["Roger Lapin", "David Copperfield", "Paul Daniels", "penn & teller"];
showMagicians(magicians_Names);