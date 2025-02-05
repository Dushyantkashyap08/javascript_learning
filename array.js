//array are Reference data type in js with variable size unlike primitive data types.

//All the refrence data types use HEAP memory to store values. but to access the values stored in heap memory , there is a need of pointer made in stack memory.
//OBJECTS, ARRAYS, FUNCTIONS are examples of reference data types

let a = [1,2,3] // noe this 1,2,3 is stored in heap memory and the varaible (arr) itself is stored in stack memory and is used as refrence to access the values from heap memory.

//array is a list which is a collection of items or elements


//2 ways to create array

//using array literal []
let arr = [1, "hello", true, null, function(){console.log("hellow world")}]

//using array constructor
let brr = new Array(1, "hello", true, null, function(){console.log("hellow world")})

console.log(arr)
console.log(arr[1])// accessing a particular element of array
console.log(brr)

console.log(typeof(brr)) //array is of type object



//BUILT IN METHODS
arr.push("bulbul") //insert at the right end
console.log(arr)


arr.pop() //removes the last element
console.log(arr)


arr.unshift("coding") //inserts an element in start
console.log(arr)


arr.shift() //removes an element from the start
console.log(arr)


arr.push(60)
arr.push(70)
arr.push(80)
console.log(arr) 
console.log(arr.slice(2,5)) //slices the array from index 2 to 4 (here SHALLOW COPY will be used, any change in the sliced array will reflect in the original array, all the top properties will be copied except for nested properties in array)


//splice(startIndex, deleteCount, item1, item2 ...) syntax of array splice
//startIndex is from where we want to start changing the array
//deleteCount is the number of elements we want to delete
//items are the values we want to insert

arr.splice(1,2) //removes 2 elements from index 1
console.log(arr) //hello and true got removed
arr.splice(3,2,"array splice", "javascript")
console.log(arr)  


//insert element at a particular index
arr.splice(1,0,"dushyant")
console.log(arr)//insert at 1 index but remove nothing


//MAP
let numbers = [1,2,3,4,5]
square = numbers.map((num, index) => { //map is used to modify array elements with a certain logic, we can also take their index as well
    console.log (index ,":", num**2)
})



//FILTER
even = numbers.filter((num) => { //filter is used to filter out array elements based on certain condition
    return num%2==0
})
console.log(even)



//REDUCE
let sum = numbers.reduce((acc, num) => { //reduce is used to reduce the array elements to a single value. acc is accumulator and num is the current element
    return acc + num
}, 0)

console.log(sum) 
//With 0: Safer, works for empty arrays, and starts the accumulator at 0.
// Without 0: Starts the accumulator with the first element, but throws an error for empty arrays.

//working :
//accumulator: 0  and current : 10 , 0+10 = 10 (without 0, accumulator = 10 and current = 20)
//accumulator: 10  and current : 20 , 10+20 = 30
//accumulator: 30  and current : 30 , 30+30 = 60



//SORTING 
let n = [5,4,3,2,1]
console.log(n.sort()) //sorts the array in ascending order

//LENGTH
console.log(n.length)


//INDEXOF
console.log(n.indexOf(3)) //index of a particular value


//FIND
let n2 = [1,2,3,4,5]
console.log(n2.find((num) => 
    {num%2==0}
)) //finds the first element that satisfies the condition


//JOIN
let n3 = [1,2,3,4,5]
console.log(n3.join("-")) // 1-2-3-4-5