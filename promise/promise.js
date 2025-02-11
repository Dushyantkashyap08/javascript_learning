//PROMISE : A promise is an object that represents the result of an asynchronous operation.
// It can be in one of three states: pending, fulfilled, or rejected.
// A promise is created using the Promise constructor, which takes a function as an argument.
// The function is executed immediately, and the promise is created.

// let firstPromise = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         console.log("First Promise")
//     }, 2000);
//     // resolve("First Promise") //if we don't include this parameter, then the promise will be in pending state
//     // reject(new Error("internal error")) // if we include reject param, then the promise will be rejected
// })

// console.log(firstPromise) //loggin the state of promise (pending, fullfilled, rejected)

// let promise2 = new Promise( (resolve, reject) => {
//     let success = false

//     if(success){
//         resolve("promise fulfilled")
//     }else{
//         reject("promise rejected")
//     }
// })

// //promise chaining
// promise2.then((message) => {  
//     console.log("first message: " + message)
//     return 20;
// }).then((message) => {
//     console.log("second message: " + message)
//     return 30;
// }).then((message) => {
//     console.log("third message: " + message)
//     return 40;
// }).catch((error) => {
//     console.error(error) //printing reject message
// }).finally((message) => {
//     console.log("i am in final block")
// })  


//HANDLING MULTIPLE PROMISE CONCURRENTLY

let promise3 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 1000, "promise 3")
})

let promise4 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 2000, "promise 4")
})

let promise5 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 4000, "promise 5")
})

Promise.all([promise3, promise4, promise5]).then((messages) => { //promise.all takes iterables of promises and will create a new promise that resolves when all the promises in the iterable are resolved
    console.log(messages)
}).catch((error) => {
    console.error(error)
})