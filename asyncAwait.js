//Async -await is a way to treat asyncronous code as synchronous
//await is used to pause the execution of the function until the promise(asynchronous block of code ) is resolved
//async function will always return a promise

// async function getName(){
//     setTimeout(() => {
//         console.log("this is async code")
//     }, 3000)
// }
// let output = getName() //promise

// console.log("start of the code")
// getName()
// console.log("end of the code")

//this will be the output right now (without await)
 
// start of the code
// end of the code
// this is async code


//AWAIT
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:



//FETCH API
//1. prepare url/api  --> sync

//2. fetch data --> async // as it is async, so by default it will be executed after all the sync processes are executed fully. but if no data will be fetched then how will it be processed. so we need to make it await to ensure the data is first fetched despite beign async and the processed

//3. process data --> sync


async function getData(){
    try{
        const response =  await fetch("https://jsonplaceholder.typicode.com/comments?postId=1") // as fetch is an async function, it will take much time to complete
        const data =  await response.json() //Therefore, response.json() will throw an error since response isn't resolved yet. so we need to make it await and the process of parsing json also await
        console.log(data)
    }catch(error){
    console.log("here is the error: ",error)
    }
}

getData()


//POST REQUEST
async function postData(){
    try{
        let header = new Headers()
        header.append("Content-Type", "application/json")

        const url = "https://jsonplaceholder.typicode.com/posts"

        const options = {
            method : "POST",
            body : JSON.stringify({username : "example", fruit : "mango"}),
            headers : header
        }

        let response = await fetch(url, options)
        let data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log("the error :", error)
    }
}

postData()