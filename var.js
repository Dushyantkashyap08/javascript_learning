//var 

//variables are named memory locations
//var has function-scope and global scope
//variables declared with var can be redeclared
//Redeclaring a variable inside a block will also redeclare the variable outside the block:
//Avoid var in modern JavaScript due to its unpredictable scoping and hoisting behavior.
// Hoisted to the top of its scope (can be accessed before declaration, but value is undefined).

{
    var x = 2;
}
// x CAN be used here due to global scope



var x = "John Doe";
var x = 0; //re-declaration possible
console.log(x)

var y = 34
y = "world" //re-assignment also possible
//also ,we are defining values of different data types in same variable y. 
// this is called dynamic typing
console.log(y)


var z = 10;
// Here x is 10
console.log(z)


{
var z = 2;
// Here x is 2
}
console.log(z)
// Here x is 2

let age;
console.log(age) //this will print undefined (data-type)