//function is a piece of code to perform some specific task

//function with param and retrun type
function add(a, b) { //function definition
    return a + b;
}

//IN THE ABOVE FUNCTION , a and b are called parameters

let sum = add(4,5); //now during function call, 4 and 5 are called arguments
console.log(sum)
//return make sure to pass the output to a variable calling the function, in the above example sum is the variable calling the function


//function without param and retrun type
function greet() {
    return "Hello";
}

//function with param and no retrun type
function multiply(a, b) {
    console.log(a * b);
}

//function without param and no retrun type
function print() {
    console.log("Hello");
}

//ANONYMOUS FUNCTIONS
// there are many ways to write a anonymous function

//function assigned to a variable
let ad = function(a, b) { //this function itself has no name and is assigned to a variable, and then called
    return a + b;
}

console.log(ad(4,5))


//arrow function 
const sayName = (yourname) => { //arrow function is another way to write a anonymous function, we use arrow at the place of function. it is a clear and short way to write a function
    return `Hello, ${yourname}!`;
}

console.log(sayName("Mayank Pandey"))


//passed as an argument
// Anonymous functions are often used as callback functions passed to other functions.
// Here, the anonymous function is passed to setTimeout as a callback.
setTimeout(function() {
    console.log('This runs after 5 seconds');
}, 5000);



// Immediately Invoked Function Expression (IIFE)
// An anonymous function can be executed immediately after it's defined.
// The () at the end invokes the function right after it's defined.

(function() {
    console.log('This runs immediately!');
})();


//FUNCTION CALLBACKS

const numbers = [1,2,3,4,5];
const double = numbers.map(function(num){
    return num * 2;
})

console.log(double)

const even = numbers.filter(function(num){
    return num % 2 === 0
})

console.log(even)




//DEFAULT PARAMS IN FUNCTIONS

function getName(name = "dushi"){
    console.log(`Hi my name is ${name}`)
}

getName(); //in this case, default value is used
getName("mayank")// in this case, provided value will be used


function printName(fname = "dushi", lname = fname.toUpperCase()){ //case when 2nd param is dependent on 1st one
    console.log(`Hi my name is : ${fname} ${lname}`)
}

printName()


//OBJECT AS DEFUALT PARAM
function printPerson(person = {name: "dushi", age: 24}){
    console.log(`Hi my name is : ${person.name} and my age is ${person.age}`)
}

printPerson()


//ARRAY AS DEFUALT PARAM
function printArray(person = ["RAHUL","SHIVAM", 34, true]){
    console.log("hello ji kaisw ho sare", person)
}

printArray()


//NULL or UNDEFINED passes as argument
function printkro(person = "rahul"){
    console.log("hello ji kaisw ho sare", person)
}

printkro(null) // if we pass null then it will print null
printkro(undefined) // if we pass undefined then it will print rahul due to undefined is same as passing it empty



//FUNCTION AS A DEFAULT ARGUMENT

function printhelo(){
    console.log("hello world")
}

function defaultname(name = printhelo()){
    console.log("my name is", name)
}

defaultname("khushi")