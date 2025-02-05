//scope in js is the region of code where a variable can be accessed

//global scope
//in global scope, wheather we declare variable by var,let or const, it can be accessed anywhere in the code

var age = 15;

console.log(age)

{
    console.log(age)
}

if(true){
    console.log(age)
}

for(let i = 0; i<2; i++){
    console.log(age)
}

function sayHello(){
    console.log("hello", age)
}

sayHello()



//FUNCTION SCOPE

//in function scope, wheather we declare variable by var,let or const, it can be accessed only inside the function

function getNum(){
    const num = 34;
    console.log(num)
}

getNum()
// console.log(num)//outside the function scope, num will be undefined




//BLOCK SCOPE

//in block scope, only VAR is not block scope
//let and const are block scope

{
    var wt = 90;
}

console.log(wt) //only be accessed when declared with var



//TEMPORAL DEAD ZONE

console.log(ht) //undefined
//code here...
console.log("helow world")
console.log("this is another line in code")
//rest of code here..
var ht = 67
console.log(ht) //67


//from line 60 to 65 , this is the region of temporal dead zone as there we cannot access ht properly, undefined in case of var and reference error in case of let and const