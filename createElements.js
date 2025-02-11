//while we can fetch and update the elements  in html
//we can also create new elements

let body = document.querySelector('body')
let heading  = document.createElement('h1')
heading.innerText = "hello world"
body.appendChild(heading) //child will be added at the last always

//now this text will be visible in the browser



//to get the parentELemt of a child element directly
let child = document.getElementById('p1')
let parentElement = child.parentElement



//we can also add elements at a specific position using insertAdjacentElement(position, element)
//available positions = 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'


//SET ATTRIBUTES
element.setAttribute() //using this we can set any attribute , like id, class, styling of element
element.setAttribute('id', 'myId')
element.setAttribute('class', 'myClass')
element.setAttribute('style', 'color: red;')



//className
element.className //this will give the class name of the element
element.className = 'myClass myClass2' //this will set the class name of the element (can also set multiple classes at once and will overwrite the previous classes)


//classList
element.classList //this will give the class list of the element
element.classList.add('myClass') //this will add a class to the element
element.classList.remove('myClass') //this will remove a class from the element
element.classList.toggle('myClass') //this will toggle a class from the element(if the class is present, it will remove it and vice versa)
element.classList.contains('myClass') //this will check if the element contains a class