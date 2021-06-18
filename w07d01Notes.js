/* SPREAD OPERATOR

    - the spread operator pulls out all elements in an array and gives them back to you as a standalone list of elements
    - denoted by [...]
*/

// const fullName = ['Brad', 'Titus'];
// //...fullName // 'Brad', 'Titus'

// const copiedFullName = [...fullName]; // 'Brad', 'Titus'
// console.log(copiedFullName);

// fullName.push('Mr.');
// console.log(fullName, copiedFullName);

// // SPREAD OPERATOR AND NUMBERS

// console.log(Math.min(1, 5, -3));

// const prices = [10.99, 5.99, 3.99, 6.59]
// console.log(Math.min(prices)) // returns NaN because 'prices' reads as an array, and the Math.min function can't unpack the array

// console.log(Math.min(...prices));

// SPREAD OPERATOR AND OBJECTS

// const persons = [{ name: 'Brad', age: 39 }, { name: 'Kyle', age: 38 }];
// const copiedPersons = [...persons];

// persons.push({ name: 'Heidi', age: 39 });
// persons[0].name = 'Bradley';
// console.log(persons, copiedPersons);

/* 
    - JS has 5 data types that are passed by value: boolean, null, undefined, string, number. These are known as primitive data types. 
        - if a primitive data type is assigned to a variable, we can think of that variable as containing the primitive value.

        let x = 10;
        let y = 'abc';
        let z = null;

        // x contains 10, y contains 'abc', z contains null - all of these values are primitive data types

        VARIABLES       VALUES
        x               10
        y               'abc'
        x               null

        // when we assign the above variables to another variable using =, we copy the *value* to the new variable and they are copied by value. 

        let a = x;
        let b = y;

        VARIABLES       VALUES
        x               10
        y               'abc'
        x               null
        a               10
        b               'abc'

        - JS has 3 data types that are copied/passed by reference - array, function, and object. These are all technically objects, so they're collectively referred to as objects
            - it doesn't grab the value; it goes to the reference in memory and pulls it when it is needed. 
            - objects are created at a location in your computer's memory. When we write arr = [], we've created an array in memory - what the variable arr receives *as the value* is the location
            (or address) of that array in memory.

        let arr = [];

        VARIABLES   VALUES  ADDRESS     OBJECTS
        arr         <001>   #001        []

        arr.push(1)

        VARIABLES   VALUES  ADDRESS     OBJECTS
        arr         <001>   #001        [1]
        */

let x = 10;
let y = 'abc';
let z = null;

let a = x;
let b = y;

console.log(x, y, z, a, b);

let arr = [];
console.log(arr);

arr.push(1);
console.log(arr);