// let name = 'Titus';
// console.log(`This can interpolate as well as print any symbol ' " [] ${name}`);
// console.log('This will print like a string but our symbols need help can "quote" ');

// use backticks instead of single quotation for console.log because it can handle all 
// symbols and punctuation and doesn't turn it into code, especially the single apostrophe
// in contractions. 

// Conditional Statements: if, if/else, else/if, switch, ternary

// IF STATEMENTS
// checks for a boolean value: if something is true, it is truthy; if it is false, it is falsy
// Truthy - if a condition is or can be true
// Falsy - if a condition is false or can be false
// Some falsy expressions are: null, NaN(not a number), O, an empty string (" "), and undefined

// If a condition is true, JS will execute the code block
// If checks one singular condition

// Declare a variable
//let isOpen = true; 

//if (isOpen === true) {
//    console.log(`Party on, Garth`);
//} else {
//    console.log(`Bummer, dude`);
//}

// ELSE IF
// Else if is used to allow us to check two or more conditions
// Examples: Day 2 Challenge, Fizz Buzz Challenge

//let temp = 68;

//if (temp >= 80) {
//    console.log('DEATH TO TROUSERS');
//} else if (temp >= 65) {
//    console.log('Forget the jacket');
//} else if (temp >= 50) {
//    console.log('Think twice, youngster');
//} else {
//    console.log(`You'll catch your death of cold`);
//}

//let userName = "myUsername";
//let password = "myPassword";

//if (userName == "myUsername" && password == "myPassword") {
//    console.log(`Welcome, friend`);
//} else if (userName == "myUsername" || password == "myPassword") {
//    console.log(`You don't seem to be who you say you are`);
//} else {
//    console.log(`Begone, usurper!`);
//}

// SWITCH STATEMENTS
// Execute a block of code depending on the "cases": condition met? check against cases
// use case (condition): - starts code block
// break; - to end the code
// Example: Fizz Buzz exercise in week02challenge.js
// Default - code to be ran if no cases are met; good practice to have

/*
let favColor = 'orange';

switch (favColor){
    case 'blue': 
        console.log('Blue like jazz');
        break;
    case 'orange':
        console.log(`Orange ya glad I didn't say banana`);
        break;
    case 'green':
        console.log(`I'm not envious`);
    default:
        console.log(`${favColor} isn't as good as mine`);
}*/
/*
let doYouWannaBuildASnowman = 'yes';

switch (doYouWannaBuildASnowman) {
    case 'yes' :
    case 'yeah' :
    case 'duh' :
        console.log(`There must have been some magic in that old silk hat they found`);
        break;
    case 'no' :
    case 'nope' :
    case 'Go away Ana!' :
        console.log(`It doesn't have to be a snowman`);
        break;
    default: 
        console.log(`Watcha wanna do? I don't know, whatch'u wanna do? DON'T START THAT AGAIN!`);
}
*/
// TERNARY
// Concise way to check two (or more) conditions using the syntax of ? and :
// Structure: 
// ( condition ) ? ( codeToRunIfTrue/Truthy ) : ( codeToRunIfFalsy )

// LOOPS
// For loop - a quick and easy way to iterate over something (to do it repeatedly)
// Infinite loops are possible, but should be avoided: ctrl + c, or close VSCode
// Loops have 3 parameters, each separated by a semicolon:
//      1 - Initial expression
//      2 - Condition
//      3 - Increment (or decrement) expression

//     1      2       3
/*for (i = 0; i <= 10; i++) {
    console.log(i);
}

for (i = 10; i >= 0; i--) {
    console.log(i);
}
*/
// Use a for loop to count to 20, but by 2s

//for (x = 0; x <= 20; x=x+2) {
//    console.log(x);
//}
/*
let word = "Deoxyribonucleic Acid"
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}
*/