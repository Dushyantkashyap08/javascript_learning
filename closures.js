//CLOSURES : function + its req.data(lexical scope or surounding environment)

//When a function is defined inside another function, the inner function has access to the outer function's variables. Even after the outer function has returned, the inner function retains access to those variables.

function outer() {
    let outerVar = "I'm from outer!"; // outerVar is a local variable in the outer() function scope.

    function inner() {
        console.log(outerVar); // Access outerVar from the outer scope, forming a closure.
    }

    return inner; // Returning a reference to the inner function.
}

const closureFunc = outer(); // outer() returns the inner function.
closureFunc(); // Output: "I'm from outer!"
// Even after outer() has finished execution, the inner() function retains access to outerVar 
// because it forms a closure (not through a copy but by reference to the environment where outerVar resides).

function getName() {
    let n = "dushi";
    console.log("my name", n);
}

getName();

// Accessing n outside of the getName function will throw an error.
console.log(n); // Error: n is not defined because n is a block-scoped variable in getName().
