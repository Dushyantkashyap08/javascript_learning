//objects are dynamic in nature means we can add or remove properties to an object at runtime.

let obj = {
    name: "Dushyant",
    age :24,
    greet : function(){ 
        console.log("hello how are you ")
    }
}


obj.height = 180 //adding property to ibject externally


// console.log(obj)

let obj2 = obj //this is not object cloning , this is just we are creating another referrence pointing the same object.
//this can be confirmed by changing any value of obj, it will reflect in both the original and copied object
console.log(obj2)


//OBJECT CLONING


//METHOD1 : using spread operator(...)
//any change made in the orignal object will not reflect in the copied object and vice verse


let obj3 = {...obj} //this is object cloning
obj.name = "mayank" //change only reflect in orginal
console.log("clone",obj3)
console.log("original",obj)


//METHOD 2: using Object.assign()

let dest = Object.assign({},obj) //along with obj , we can pass multiple objects to clone also

obj.age = 50

console.log("original",obj) //age in obj is updated 
console.log("clone",dest) //no change in dest


//METHOD 3: using iteration (not much recommended)

let src = {
    name: "Dushyant",
    age :24,
    ht : 180
}

let destination = {}

for (let key in src) {
    let newKey = key
    let newVal = src[key]

    //now insert these key-value pairs in destination object
    destination[newKey] = newVal
}

src.age = 50

console.log("original",src) 
console.log("clone",destination) 



//GARBAGE COLLECTOR IN JAVASCRIPT

// JavaScript: Fully automatic garbage collection. Developers don’t worry about memory management.
let obj = { name: "Alice" };
obj = null; // The object { name: "Alice" } is now unreachable and will be garbage collected.