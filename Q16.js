"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.



let guestArr = ["Rahim", "Irha", "Reeham", "Murtasim"];
let canotAttend = "Reeham";
let newGuest = "Meerab";
guestArr[guestArr.indexOf(canotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((item) => (console.log(`Dear ${item}, I found a bigger dinner table.`)));
//Add guest beggining of Array
let guestBegin = "Dua";
guestArr.unshift(guestBegin);
console.log(guestArr);
//Add guest middle of Array
let middleGuest = "Zara";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
//Add new Guest to the end of the list
guestArr.push("Izra");
console.log(guestArr);
//new set of invitation
guestArr.map((item) => (console.log(`Dear ${item} you are cordinally invited to a dinner`)));
