"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
//create the orderSandwich function 
function orderSandwich(...items) {
    console.log("sandwich order:");
    if (items.length === 0) {
        console.log("No itemsn selected your sandwich items is empty.");
    }
    else {
        console.log("Items:" + items.join(","));
    }
    console.log("-------------------------");
}
//call the function with diffrent number of arrguments
orderSandwich("cheese", "chicken patty", "Mayo");
orderSandwich("Turkey", "BBQ", "Club");
orderSandwich(); // calling with no argument
