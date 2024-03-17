"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
const favFruits = ["Apple", "Banana", "Strawberry"];
if (favFruits.includes("Banana")) {
    console.log("You really like bananas!");
}
if (favFruits.includes("Apple")) {
    console.log("You really like bananas!");
}
if (favFruits.includes("orange")) {
    console.log("You really like bananas!");
}
else
    (console.log("Orange are not in your favourite list"));
if (favFruits.includes("Strawberry")) {
    console.log("You really like  Strawberry!");
}
if (favFruits.includes("Grapes")) {
    console.log("You really like bananas!");
}
else
    (console.log("Grapes are not in your favourite list"));
