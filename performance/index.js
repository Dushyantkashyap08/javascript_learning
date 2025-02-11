//code 1

// const t1 = performance.now();
// for (let i = 1; i<=100 ; i++){
//     let para = document.createElement("p");
//     para.textContent = "para number: "+(i);
//     document.body.appendChild(para);
// }
// const t2 = performance.now();

// console.log("time taken by code to execute: "+(t2-t1)); //0.5 ms


//code 2

const t3 = performance.now(); //gives timestamps

let divElement = document.createElement("div");

for (let i = 1; i<=100 ; i++){
    let para = document.createElement("p");
    para.textContent = "para number: "+(i);
    divElement.appendChild(para);
}

document.body.appendChild(divElement);
const t4 = performance.now();

console.log("time taken by code to execute: "+(t4-t3)); //0.07ms


//code 2 is more efficient than code 1 due to it has only 1 time reflow and repaint processes. but in code 1 it has multiple reflow and repaint processes
//in short, in code 1 we have to append 100 p elements in DOM (slower). but in code 2 we have to append only 1 div element containing 100 p elements in DOM (faster)


//DOCUMENT FRAGEMENT
//light weight dom object used to store  html elements like actual dom object
//only difference is unlike DOM obj, it does not take in account of a repaint and a reflow

let fragment = document.createDocumentFragment();

for (let i = 0; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "para number: "+(i);
    //no repaint and no reflows will be taken here
    fragment.appendChild(para);
}

document.body.appendChild(fragment);