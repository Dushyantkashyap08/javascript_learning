//arithematic operators
// --> Unary operators (++, --)  works on 1 operand
// --> Binary operators (+ - * / %) works on 2 operands

//unary has further --> pre increment(++a) and post increment(a++)    Or post decrement(a--) and pre decrement(--a)

let a = 5
console.log(a++) // this will print 5 and then increment the value of a by 1 in its memory
console.log(++a) // now as the value is 6 so it first increment by 1 then print the value, so we get 7
console.log(a--) // this will print 7 and then decrement the value of a by 1 in its memory
console.log(--a) // now as the value is 6 so it first decrement by 1 then print the value, so we get 5





console.log("assignment operators")
// =, +=, -=, *=, /=, %=
let b = 5
b = b + 1 //or b += 1
console.log(b)




console.log("comparison operators")// retruns a boolean value
// !=, !==, >, <, >=, <=
// == and !=: Loose Equality (comparing values)
// === and !==: Strict Equality (comparing values and data types)

console.log(5 == "5") //true
console.log(5 === "5") //false



console.log("ternary operator")
// condition ? true : false
let age = 4
console.log(age > 18 ? "adult" : "child")
  


console.log("logical operators")
// &&, ||, !


//IMPORTANT NOTE
//when working with non booleans values, either TRUE or VALUE is printed in case of OR operator
                                        //either FALSE or VALUE is printed in case of AND operator

console.log(true || 'babber') //this is a non boolean case where one value is any data type other than boolean
console.log(true && 'babber') 

console.log(false || 'babber') 
console.log(false && 'babber')

//falsey values: false, 0, "", null, undefined, NaN
//truthy values: true, any number, any string, any object


//short circuiting
// if the first operand is truthy then the second operand is not evaluated
console.log(false || true || false || true || true || false) //as it got true on 2nd position so it will not check further


//bitwise operators
// &(AND), |(OR), ^(XOR),  ~(NOT),  <<(LEFT SHIFT),  >>(RIGHT SHIFT)

//truth table of AND operator
// 0 0 = 0
// 0 1 = 0
// 1 0 = 0
// 1 1 = 1

//truth table of OR operator
// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 1

//truth table of XOR operator
// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 0

//truth table of NOT operator
// 0 = 1
// 1 = 0

//left shift : whenever we left shift a number by 'a' times ,then the number is multiplied by 2^a
//right shift : whenever we right shift a number by 'a' times ,then the number is divided by 2^a

console.log(5<<2) //5*2^2 = 5*4 = 20
console.log(5<<1) //5*2^1 = 5*2 = 10

console.log(5>>2) //5/2^2 = 5/4 = 1


//nullish coalescing operator
// ??: returns the right hand side operand if the left hand side operand is null or undefined
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

//SWITCH STATEMENT

let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}