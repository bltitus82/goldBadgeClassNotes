// DOM - Document Object Model
/*
A representation of a window.document object that comprises everything that we see in the browser (and some things we don't, 
such as <head> tag).
    - DOM Node interface has subclasses of: 
        - Document
        - Element
        - DocumentFragment
*/

// let h1 = document.createElement("h1");
// document.body.appendChild(h1);
// h1.innerText = "Welcome to DOM School";
// h1.style.color = "orange";
// h1.style.fontFamily = "sans-serif";
// h1.style.letterSpacing = "1.5px";

// document.getElementById()

let h3 = document.getElementById("id-method");
h3.innerText = ".getElementById"
h3.style.color = "orange"

let p = document.getElementById("get-id");
p.innerText = "Method used to grab the first element with a specified id"

let bckgr = document.querySelector("body");
bckgr.style.backgroundColor = "gray";

let ourList = document.getElementsByClassName("our-list");
ourList[0].style.color = "orange";

let qSelect = document.querySelector("#q-select");
qSelect.innerText = "Query Selector grabs the first matching selector";

let selectAll = document.querySelectorAll("a");

let myBtn = document.querySelector(".submit-btn");
myBtn.addEventListener("mousedown", () => bckgr.style.backgroundColor = "blue");
myBtn.addEventListener("mouseup", () => bckgr.style.backgroundColor = "grey");