"use strict";
//Q6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
//character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//store a person name with combination of "\t" and "\n"
const personNmae = "\t Dua_khan \n";
console.log(personNmae);
//striping the white spaces
const strippedName = personNmae.trim();
console.log(strippedName);
