// Day 04 Functions; Scope; Hoisting; and Literals

// Literals
// Literals are hard-coded values that we assign. 
// They are not brought in from somewhere else

// let butlerMascot = 'Bulldog';
// let myAge = 38;
// let arr = [];

// Hoisting
// JS acknowledges that a variable/function is declared as soon as the code is run, so if you use the variable/function before 
// you declare it and assign a value, it won't return that the variable/function is undeclared, but return 'undefined'

// console.log(x);
// var x=7;


//Functions
// Functions are blocks of code that can be called with a single line and run multiple times without having to 
// recreate the commands repeatedly. 

// function sayHello() {
//     console.log("Hello World");
// }

// sayHello();

// Scope
//Hierarchy of variables in our code - commonly referred to as global scope, local scope, parent scope, and child scope

// let coffeeOrigin = 'Ethiopia'; // global scope because it is declared outside of a variable

// function example() {
//     let x = 'Local Scope - declared inside of a function, and only exists within the function';
//     console.log(x);
//     console.log(coffeeOrigin);
// }

// console.log(x); // comes back undefined, because it was only declared and assigned a value inside the function. 

