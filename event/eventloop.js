//sync code : executed line by line in order
//async code : executed line by line but not in order

//EVENT LOOP : used to execute async code in a synchronous manner
//event loop has 3 components
//1. call stack
//2. browser/ web api
//3. callback queue/ task queue

console.log("start") //sync code
setTimeout(() => {   //async code
    console.log("this will run after 2 seconds")
}, 2000);
console.log("end") //sync code

//The JavaScript engine encounters this line and immediately logs "start" to the console.
// The setTimeout() function registers a callback function to be executed after 2000 milliseconds (2 seconds).
// The callback function (() => { console.log("this will run after 2 seconds"); }) is pushed to the Web APIs environment, which is outside the JavaScript main thread.
// The timer starts counting down in the background while the rest of the code continues executing.

//The JavaScript engine encounters this line next and logs "end" immediately.

// The callback function executes, and the message is logged. (this will run after 2 seconds)



// JavaScript uses an event-driven, non-blocking execution model:
// Synchronous code is executed first.
// Asynchronous operations (like setTimeout) are handled by the Web APIs environment and queued for execution once the synchronous code completes.
// The event loop continuously checks for tasks in the callback queue and executes them when the call stack is empty.


//ASYNC CODE IN JS
//timer functions (setTimeout, setInterval, requestAnimationFrame) 
//event listeners (addEventListener, removeEventListener)
//fetch API (fetch)
//XHR (XMLHttpRequest)
//promises (Promise)
//WebSocket (WebSocket)


//SYNC CODE IN JS
//console.log()
//alert()
//document.write()
//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()


//JavaScript is considered a single-threaded language because it has only one main execution thread, also known as the call stack, where all synchronous operations are executed one at a time.

//Although JavaScript itself is single-threaded, modern environments (browsers and Node.js) provide additional features like:
// Web Workers: Enable multi-threading by offloading work to background threads.
// Asynchronous APIs: Allow parallel operations without blocking the main thread.