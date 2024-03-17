
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


//Define an  array of places visits
let placesLocation = ["Makkah" , "Japan", "Madinah", "Effile tower", "Turkey"];



// • Print array in its original order.
console.log("Original order:");
console.log(placesLocation);



//print the array in alphabetical order without modifying
 let alphaOrder = placesLocation.slice().sort();
 console.log("Alphabetic order:");
console.log(alphaOrder);


//print array to show that array in still orignal order
console.log("Still in original order:");
console.log(placesLocation);


// //print the array is reverse oder without change orignal order
let revOrder = placesLocation.slice().sort().reverse();
console.log("Alphabetic reverse order:");
 console.log(revOrder);


//print array to show that array in still orignal order
console.log("still in original order:");
 console.log(placesLocation);


 //reverse the order of list
 placesLocation.reverse()
 console.log("Reversed order:")
 console.log(placesLocation);


 //reverse the order of the list again for back to the original order
 placesLocation.reverse()
 console.log("Back to the original order:");
 console.log(placesLocation);


//sort the array in alphabetical order
placesLocation.sort()
console.log("sorted array in alphabetical order:");
console.log(placesLocation);


//sort the array in reverse alphabetical array
placesLocation.sort((a,b) => b.localeCompare(a))
 console.log("Sorted in reverse alphabetical opeartors:");
 console.log(placesLocation);