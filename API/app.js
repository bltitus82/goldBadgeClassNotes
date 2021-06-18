// API - Application Programming Interface
/* An interface between two applications that allows interactions between them without the use of less abstract language. 
    - 2 types of APIs
        - Browser API: built into the browser and able to expose data from the browser and environment, such as DOM API, allowing us to style page, make popup windows appear, etc.
        - Third Party API: require retrieval of the code from the web, such as GoogleMaps API. Object-based, so they have containers for the data (JSON Format).
*/

// HTTP requests
/* defined set of request methods which indicate an action to be performed
    REST - REpresentational State Transfer
        - architectural style for stateless standard of communication
            - GET retrieves resources by an ID
            - POST creates a new resource
            - PUT updates a resource using an ID
            - DELETE removes specific resource using an ID
    All of these reach an endpoint
        - a URL that a client app uses to communicate with the server
*/

let cardImg = document.querySelector("body > div > div > div.card-img > img");
let name = document.querySelector(".name");
let ability = document.querySelector(".ability");
let weight = document.querySelector(".weight")
let generateBtn = document.querySelector(".submit-btn");

generateBtn.addEventListener("click", (e) => {
    e.preventDefault()

    let id = document.querySelector(".search-input").value;

    // fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         name.innerText = data.name;
    //         cardImg.src = data.sprites.front_shiny;
    //         ability.innerText = data.abilities[0].ability.name;
    //         weight.innerText = data.weight;
    //     })

    async function getPokemon(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
            name.innerText = data.name;
            cardImg.src = data.sprites.front_shiny;
            ability.innerText = data.abilities[0].ability.name;
            weight.innerText = data.weight;
    }

    getPokemon();
})
