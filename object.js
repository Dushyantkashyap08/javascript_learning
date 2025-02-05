//OBJECTS :  a Reference data type is js to store the data in key value pairs

let obj = {
    name: "Dushyant",
    age :24,
    "favourite color" : "blue", //we need to use double inverted commas in key when there is a space between the key
    greet : function(){ //can also define functions in an object
        console.log("hello how are you ")
    }
}

console.log(obj)

obj.greet()
console.log(typeof(obj)) //object

let obj2 = obj //here are creating another refrence in stack which will point the same data as pointed by obj in heap memory (SHALLOW COPYING)
console.log(obj2)