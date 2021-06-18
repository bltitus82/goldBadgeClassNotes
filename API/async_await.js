// Aynchronous JS Functions
/*      - async returns a Promise
        - await makes the function wait for a Promise
*/

// function standardFunction () {
//     return console.log("This is a standard function.")
// }

// standardFunction ();

// async function asyncFunction () {
//     return console.log("This returns a promise.")
// }

// asyncFunction();

// async function asyncAction () {
//     setTimeout(() => {
//         console.log("Yer a wizard, Harry!")
//     }, 3000);
// }

// asyncAction();

// Promise
/* Commit to do something:
    - completed -> resolved
    - rejected
*/

// let p = new Promise((resolve, reject) => {
//     // Promise object with one function with resolve & reject parameters
//     let a = 1 + 2
//     if (a===2) {
//         resolve(`Just when I think you couldn't get any dumber, 
//         you go and do something like this. AND TOTALLY REDEEM YOURSELF!`)
//     } else{
//         reject(`Your mother was a hamster, and your father reeked of 
//         elderberries. Now go away, or I shall taunt you for a second time.`)
//     }
// })

// p.then((message) => {
//     // anything inside .then is a resolve. Takes a fx with a single parameter
//     console.log(`this is the .then(). ${message}`)
// }).catch((message) => {
//     // anything inside .catch is a reject state
//     console.log(`this is the .catch(). ${message}`)
// })

// Try, Catch, Throw, and Finally
// try/catch only handles runtime errors

// try {
//     // tests a block of code
//     console.log("Start of the try")
// } catch(err) {
//     // handles the error
//     console.log("error has occurred " + err)
// } finally {
//     // executes the code after try/catch regardless of the result
//     console.log("Finally ALWAYS runs")
// }

// let json = '{"age": 30}'

// try {
//     let user = JSON.parse(json)
//     if (!user.age) {
//         throw new SyntaxError("Incomplete data: no name")
//     }
// } catch (e) {
//     console.log(`JSON Error: ${e}`) // e.name or e.message for specificity
// }
