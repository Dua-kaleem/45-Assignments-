// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// • Tests for equality and inequality with strings
const string1: string = "DUA";
const string2: string = "Faiza";
console.log(string1 === string2);
console.log(string1 !== string2);



// • Tests using the lower case function
let mixCasese: string = "Hello World";
console.log(mixCasese.toLowerCase()=== "hello world" );



// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 25;
const num2: number = 5;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);



// • Tests using "and" and "or" operators
const condition: boolean = true ;
const condition1: boolean = false ;

console.log(condition && condition1)
console.log(condition || condition1)



// • Test whether an item is in a array

let soupVariety: string[] = ["chicken yakhni soup", "chicken corn soup", "hot & sour soup"];
console.log(soupVariety.includes("chicken yakhni soup"));


// • Test whether an item is not in a array
console.log(soupVariety.includes("Chicken Yakhni Soup"));