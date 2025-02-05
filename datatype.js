//PRIMITIVE DATA TYPES

//numbers = 1,2,3,87.8, 34.67 .......(integers and float) : 8 bytes
//boolean = True, False               1 byte
//string = "hello", "this is a pen"   2 bytes
//undefined = when only variable declaration is there but not definition   0 bytes
             //ex: let age;
//null = when we don't want to define a specific value to our variable     0 bytes

//bigInt = 12345678901234567890n  number data type are in range of -2^53 - 1 to 2^53 - 1
//if we want to go beyond this range then we need to use bigInt


//All the primitive data types use stack memory to store theit values

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