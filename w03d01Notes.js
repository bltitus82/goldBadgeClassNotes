// Arrays and Objects

/* A high-level list-like object used to be traversed and mutated.
    - uses integers as element index
    - can be accessed by a bracket notation [index] or dot notation (method)
    - arrays are zero-index
        - first object at zero (0)
        - last object at array.length - 1
*/

// create an array

// let british = ["rolls royce", "bentley", "caterham", "aston martin"];
// console.log(british[british.length - 1]);

// Array Methods

// british.push("mini");

// console.log(british);

// british.splice(0,1,"jaguar");
// console.log(british);

// british.pop();
// console.log(british);

// british.indexOf("Land Rover");
// console.log(british.indexOf("Maserati"));

// let german = ['BMW', 'Mercedes', 'Audi', 'Porsche', 'Alpina', 'Volkswagen'];

// for (cars of german) {
//     console.log(cars);
// }

// array.forEach() runs a function for each element in an array

// german.forEach(car => console.log(car));

// array.map() --> transforms elements in original array by callback function

// let germanU = german.map(car => car.toUpperCase());
// console.log(germanU);

// console.log(german.filter(car => car.startsWith("A") || car.startsWith('B')));

// Objects
/* Containers for values in a JSON format (JavaScript Object Notation).
    - exists as a string
    - has properties and methods
    - .property
    - .method()
    - associative arrays (each property is associated with a string value) 
*/

// Define JS object with an object literal

// let car = {
//     // key : value pair (properties) that are comma-separated
//     make: 'Porsche',
//     model: '911',
//     country: 'Germany',
//     driver: 'Walter Rohl'
// };

// console.log(car.make);

// console.table(car);

// car.make= "Maserati";
// console.log(car.make);

let client = new Object;
console.log(client);

client.firstName = 'Yeldarb';
client.lastName = 'Sutit';
client.phoneNumber = '123-456-7890';
client.address = '555 Main Street';
client.city = 'Indianapolis';
client.state = 'IN';
client.zip = '46239';
client.birthYear = 1982;

let manager = {
    firstName: 'Brad',
    lastName: 'Titus',
    birthYear: 1982,
    // First way requires paramater of birthYear from outside
    // setAge: function(birthYear) {
    //     return 2021 - birthYear
    // }
    // Second way takes property from this.birthYear
    // setAge: function() {
    //     return 2021 - this.birthYear
    // }
    setAge: function(){
        this.age = 2021 - this.birthYear
    }
}

// console.log(manager.setAge());
manager.setAge()
console.log(manager.age)

// THIS refers to the object it belongs to. calling "manager.birthYear" is a bad idea because if the object
// name changes, it could cause the whole thing to break if every reference doesn't also get changed. but using THIS 
// will mean that the object property is always called within the object without having to update the code when the
// object name changes