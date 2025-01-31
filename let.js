//let


//Variables declared with let have Block Scope
//Variables declared with let must be Declared before use
//Variables declared with let cannot be Redeclared in the same scope


{
    let x = 2;
}
  // x can NOT be used here due to block scope



// let x = "John Doe";
//let x = 0; //re-declaration not possible in same scope with let



//Redeclaring a variable inside a block will not redeclare the variable outside the block:
let x = 10;
// Here x is 10

{
let x = 2;
console.log(x)
// Here x is 2
}

// Here x is 10
console.log(x)



{
    let x = 5;
    x = 4;
    console.log(x)
    //redefination possible in the same scope
}