let par = document.getElementById("event");
let originalText = par.innerText;
let isUppercase = false;

par.addEventListener("click", changeCase);
function changeCase(){
    if (isUppercase) {
        par.innerText = originalText.toLowerCase();
    } else {
        par.innerText = originalText.toLocaleUpperCase();
    }
    isUppercase = !isUppercase; // Toggle the state
}


// par.removeEventListener("click", changeCase); //remove the event listener

element.addEventListener(event, callback, usecapture);
//by default, the event listener is applied in the bubbling phase. to apply it in the capturing phase, we need to explicitly set use capture as true
//capturing phase is traversing to the event target element from the root element
//bubling phase is opposite to capturing phase


//during an event trigger, an event object(type of event) is passed into addEventListener, which we can use to get information about the event
//to access this event object or use it, we need to use the event parameter in the callback function
// in the changeCase function above, changeCase(event){ console.log(event)}, we can access and get info about the event object



//DEFAULT BEHAVIOR , we can modify the default behaviour of any element using preventDefault
let anchor = document.getElementById("fanchor");

anchor.addEventListener("click", function(event){
    event.preventDefault(); //prevents the default behavior of the event
    anchor.textContent = "hello world";
})