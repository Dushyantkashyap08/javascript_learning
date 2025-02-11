//JavaScript literals serve as syntactic representations for various types of data like objects, string, boolean, array, and more.

//Types :
// String literals
// Template literals
// Object literals
// Array literals


//String literals
let myName = "Mayank Pandey!";

//concatenation of strings

let firstName = "Mayank";
let lastName = "Pandey";
let fullName = firstName + " " + lastName;

console.log(fullName);

//Output : Mayank Pandey




//Template literals : to make formatted strings

let number1 = 10;
let number2 = 20;

let sum = number1 + number2;

console.log(`The sum of ${number1} + ${number2} is equal to ${sum}`);    //Output : The sum of 10 + 20 is equal to 30







//Object literals : They consist of key-value pairs enclosed within curly braces {}.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isRunning : true
};
console.log(person)








//array literals
//unlike some other strongly-typed languages such as Java, C++, or C#. JavaScript is a dynamically typed and loosely typed language, allowing arrays to hold mixed data types.
let fruits = ["apple", "banana", "orange", "mango"];

let data = [true, 'ab', "great", 34];
let mixedArray = [1, "Hello", false, { name: "Alice" }, [1, 2, 3], null]; //holding complex data

console.log(mixedArray)

