//control flow statements
//continue : skip the current iteration
//break : stop the loop
//throw : throw an exception
//return : return from a function

console.log("BREAK STATEMENT")
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i); // Outputs: 0, 1, 2
  }

  
  console.log("CONTINUE STATEMENT")
  for (let j = 0; j < 5; j++) {
    if (j === 3) continue;
    console.log(j); // Outputs: 0, 1, 2, 4
  }
  

  console.log("RETURN STATEMENT")
  function greet(name) {
    if (!name) return "Name is required!";
    return `Hello, ${name}!`;
  }

  console.log(greet("John")); //Jhon
  console.log(greet()); // Name is required
  

  console.log("THROW STATEMENT")
  function checkValue(val) {
    if (val < 0) throw new Error("Negative value not allowed");
  }
  
  console.log(checkValue(-1));