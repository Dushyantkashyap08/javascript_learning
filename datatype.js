//PRIMITIVE DATA TYPES

//numbers = 1,2,3,87.8, 34.67 .......
//boolean = True, False
//string = "hello", "this is a pen"
//undefined = when only variable declaration is there but not definition
             //ex: let age;
//null = when we don't want to define a specific value to our variable

//bigInt = number data type are in range of -2^53 - 1 to 2^53 - 1
//if we want to go beyond this range then we need to use bigInt

let marks = false
console.log(typeof(marks)) //typeof: to check the type of data
console.log(marks)

age = null
console.log(typeof(age)) //null is of object data type

let root
console.log(typeof(root)) // undefined is of same undefined data type


//ES6 has a new data type called symbol
//It represents a unique "hidden" identifier

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
  
  let id = Symbol('id');
  person[id] = 140353;
  console.log(person[id])
  // Now person[id] = 140353
  // but person.id is still undefined