"use strict";
// this === window

console.log("this === " + this); 

let button1 = document.getElementById("button1");
button1.addEventListener("click",
namedFunction); 

let button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
  console.log("this === " + this);
  alert(this.innerHTML);// this === #btn2
});

function namedFunction() {
  console.log("this === " + this); // this === #btn1
  alert(this.innerHTML);
}


let button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
    console.log("this === " + this); // this === window
    alert(this.innerHTML);
});







let menu1 = document.getElementById('menu1');

function addElement() {
// assume ‘element’ has been successfully defined.
// example 1: named callback function
menu1.addEventListener('dblclick', removeElement);

// example 2: anonymous function
//menu1.addEventListener("dblclick", function() {
//this.parentNode.removeChild(this);
//});
}

// Removes an element when dblclicked
function removeElement() {
  console.log(this);
this.parentNode.removeChild(this); // or this.remove();
}

//A Caveat: Arrow Functions do Not Bind this
menu2.addEventListener("dblclick", function() {
// All good! this === element that was clicked
this.parentNode.removeChild(this);
console.log(this);
});