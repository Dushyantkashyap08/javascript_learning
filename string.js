//strings are written inside quotes either double, single or even backtick or template literals
let myName = "Mayank Pandey";
let myName2 = 'Mayank Pandey';
let myName3 = `my 
name 
is
Mayank Pandey`;

console.log(myName);
console.log(myName2);
console.log(myName3);

//abbove are the ways to create string literals

//creating a string using string constructor
let myName4 = new String("Mayank Pandey");
console.log(myName4);

//operations on string

//concatenation
let f1 = "Mayank ";
let l1 = "Pandey";
let fullName = f1 + l1; //one way
let ans = `${f1}${l1}`; //another way using backtick
console.log(ans);
console.log(fullName);


//length of string
let man = "Mayank Pandey";
console.log(man.length);


//uppercase and lowercase
let n1 = "Mayank Pandey";
console.log(n1.toUpperCase());
console.log(n1.toLowerCase());


//substring
let n2 = "Mayank Pandey";
console.log(n2.substring(0, 4)); //from 0 to 4 excluding 4


//split
let n3 = "Mayank Pandey";
console.log(n3.split(" ")); //split into an array of substrings


//replace
let n4 = "Mayank Pandey";
console.log(n4.replace("Mayank", "chubul"));

//join
let n5 = ["Mayank", "Pandey", "Chubul", "Kumar"]; //but join method converts array into string
console.log(n5.join("-"));


let sentence = "hello \"how\" are you" //to apply doubke quotes inside string
console.log(sentence)