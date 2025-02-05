//foreach loop is specific to arrays only

let num = [1,2,3,4,5]
 
num.forEach((value, index) => { //apart from traditional for loop we can use this one 
    console.log("Number: ",value, "Index : ", index)
})


//for-in loop is used to iterate over an object's properties
console.log("\n")
console.log("FOR-IN LOOP")
let obj = {
    name: "Dushyant",
    age :24,
    "favourite color" : "blue", //we need to use double inverted commas in key when there is a space between the key
    greet : function(){ //can also define functions in an object
        console.log("hello how are you ")
    }
}

for (let key in obj) {
    console.log(key, ":", obj[key])
}





//for-of loop is used to iterate over iterable objects like ARRAYS AND STRINGS
console.log("\n")
console.log("FOR-OF LOOP")

let arr = [1,2,3,4,5]
for (let value of arr) {
    console.log(value)
}

let str = "Dushyant"
for (let char of str) {
    console.log(char)
}


//how to pass array as argument in a function

let arrr = [10,20,30,40,50]

function sum(arr){
    let length = arrr.length
    sum = 0
    // for(let i=0; i<length; i++){    //using traditional for loop
    //     sum += arrr[i]
    // }
    // console.log(sum)

    // for (jey in arrr){      //using for in loop
    //     sum += arrr[jey]
    // }

    arrr.forEach((value) => {   //using forEach loop
        sum +=value
    })
    console.log(sum)
}

sum(arrr)