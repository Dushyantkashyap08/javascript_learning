//hoisting is a process in which a function definition automatically shifts to the the top of its scope before the code is executed

sayMyName("dushyant")

function sayMyName(name){ //we are calling a function before its definition , but during the code execution it is shifted to top of its scope
    console.log(name)
}

//function hoisting works in the case of traditional function definition only. in case of function expression, it does not work

sayHello() //it will give reference error

let sayHello = function(){
    console.log("hello")
}





//VARIABLE HOISTING (in case of var keyword only)

console.log(age); // when we are accessing the variable before we define it, then it will print undefined becoz during code execution , only the variable declaration shifts to the top of scope

var age = 34
console.log(age); //here it will work properly

//in case of let and const keyword , variable hoisting is not possible. it will throw reference error




//CLASS LEVEL HOISTING IS NOT POSSIBLE

let obj1 = new Human(); //it will give error

class Human{

}