//function call stack is a stack data structure which is used to store the function calls.
//it is used to track the execution of a program.

//firstly a() is executed and initialised in the stack first. then inside it, b() is called, then it is initialised. then inside b(), c() is called. then inside c(), d() is called.
//now d() is at the top of stack , after its execution is completed, it is removed from the stack top. now remaninig c() code executes and after that it removed from the stack and so on.....

//this is how function call stack works

function d(){
    //code here...
}

function c(){
   //code here ..
   d();
  //code here...

}

function b(){
    //code here...
    c();
    //code here...
}

function a(){
    //code here ...
    b();
    //code here...
}


//FUNCTIONS ARE CALLED FIRST CALSS CITIZENS becoz:
// can be assigned to variables
// used as args
// can return a function
// use as a property
// use function in DS 


//function as argument inside a function

greetMe(greet, "Mayank Pandey")

function greetMe(greet, fullname){
    console.log("hello", fullname)
    greet()
}

function greet(){
    console.log("greetings of the day")
}

//function retrning a function

function createGreeting(greeting) {
    // This inner function is returned by the outer function
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

// Create a specific greeting function
const sayHello = createGreeting("Hello"); //now sayHello will become a function
const sayHi = createGreeting("Hi");

// Use the returned functions
console.log(sayHello("Alice")); // Output: "Hello, Alice!"
console.log(sayHi("Bob"));      // Output: "Hi, Bob!"



//PASSING FUNCTION IN A DATA STRUCTURE (ARRAY)
let arr = [ //array of functions
    function(a,b){
        return a+b
    },

    function(a,b){
        return a-b
    },

    (a,b) => {
        return a*b
    }
];

let first = arr[2]
console.log(first(4,5))




//PASSING FUNCTION AS A PROPERTY OF OBJECT

let obj = {
    name: "Dushyant",
    age: 24,
    greet: function() {
        console.log("hello world")
    }
}

obj.greet()