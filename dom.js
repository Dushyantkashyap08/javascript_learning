//window object is the top most object in the objhect heirarchy
//anything we are accessing or manipulating comes under window object

//example: we are on a website and want all the html code formatted into a js code is called DOM
//and it will give the html code in a javascript object


//DOM : allows JavaScript to interact with and manipulate the content, structure, and style of a web page dynamically.
//example: // Change the text of an HTML element with id="demo"
document.getElementById("demo").innerText = "Hello, World!";


//BOM : allows JavaScript to interact with the browser, not just the web page.
// Redirect to a new URL
window.location.href = "https://www.example.com";



//document: property of the window object and represents the web page loaded in the browser window. It is the entry point to the DOM.

//DOCUMENT METHODS
document.getElementById() //: to access html element with id
document.getElementsByClassName() //: to access html element with class
document.getElementsByTagName() //: to access html element with tag


// another way
document.querySelector('#idname') //: to access 1st html element with id
document.querySelector('.classname'); //: to access 1st html element with class
document.querySelector(tagname) //: to access 1st html element with tag

//to get multiple objects with query selector
document.querySelectorAll('.classname') //: to access all html elements with class
document.querySelectorAll(tagname) //: to access all html elements with tag



//another way to access elements in browser only
//click an html element, then type $0 in the console window. it will display that selected element in the console window 



//to GET the inner html of an element
document.getElementById("demo").innerHTML


//to SET the inner html of an element
document.getElementById("demo").innerHTML = "Hello, World!";



//to GET the outer html of an element
document.getElementById("demo").outerHTML
//When you set outerHTML, the entire element (including its children) is replaced with the new HTML.


.innerText
//INNER TEXT
//Returns or sets the visible text content of an element
//when you only need the visible text content, as it appears to the user.
//Collapses whitespace and ignores extra spaces, tabs, and newlines.
//excludes the text that is hidden


.textContent
//TEXTCONTENT
//when you need to work with raw text content, including hidden text and whitespace.
//It includes all text, even if it is hidden (e.g., text inside elements with display: none or visibility: hidden).


//DELETE ELEMENTS
parent.removeChild(child)