//Events are the things that happen in our code. For example, when a user clicks a button, a mouse moves over an element, or when a timer expires.
//Events are triggered by user actions or by the system.
//in response to every event, there is an action

//to check events in a browser window, use monitorEvents(document) in the console window
// to stop it, use unmonitorEvents(document) in the console window


//event target : the element(entity) in ther DOM that triggered the event

//METHODS FOR EVENTS
//addEventListener(event, callback)
//removeEventListener(event, callback)
//dispatchEvent(event)

// let par = document.getElementById("event");
// let originalText = par.innerText;
// let isUppercase = false;

// par.addEventListener("click", function () {
//     if (isUppercase) {
//         par.innerText = originalText.toLowerCase();
//     } else {
//         par.innerText = originalText.toLocaleUpperCase();
//     }
//     isUppercase = !isUppercase; // Toggle the state
// });


let paras = document.querySelectorAll("p");

function showPara(event){
    if(event.target.nodeName === "SPAN"){ //only show text when clicked on span (conditional behaviour)
        alert("this is para :" +event.target.textContent); //we can use target property to get the element that triggered the event
    }
}

//applying same listener on all p elements
// for(let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener("click", showPara)
// }


//directly applying event in the root element 

let wrapper = document.getElementById("ediv"); 
wrapper.addEventListener("click", showPara)