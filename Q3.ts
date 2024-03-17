//Q-3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



let personName: string = "Dua kaleem";

//LowerCase
 console.log(personName.toLowerCase());
 //UpperCase
 console.log(personName.toUpperCase());
//TittleCase
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
