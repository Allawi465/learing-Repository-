// Cross-Origin Resource Sharing method 

/* const url = "https://elephant-api.herokuapp.com/elephants";

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector("");


async function getElephants() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = error;
    }
}

getElephants(); */

// API call error handling with Arrow functions 
// call to fetch data from an API

fetch(url)
.then(response => response.json())
.then(data => createHTML(data))
.catch(error => resultsContainer.innerHTML = displayError("An error occurred when calling the API"));

function createHTML(results) {
    const facts = results.all;

    resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {

            if (i === 10) {
              break;
           }

            resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
        }
};

// Inspecting the results of API calls
// Postman or console.log 

/* const resultsContainer = document.querySelector(".");

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

const url = "https://api.rawg.io/api/games?key=54582cd735a340b89b17702eae51578b";

async function callApi() {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const results = json.results;

    results.forEach(function (result) {
        resultsContainer.innerHTML += `<div>${result.name}</div>`;
    });
}

callApi(); */

// Skipping certain results with continue with proxy method

const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

        for(let i = 0; i < results.length; i++) {

            if(!results[i].name) {
                continue;
            }

            resultsContainer.innerHTML += `<div class="card">
                                            <h4>${results[i].name}</h4>
                                            <img src="${results[i].image}" alt="${results[i].name}" />
                                        </div>`
        }



    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
}

makeApiCall();

// Testing API Call using startsWith and toLowerCase method 

/* const namesContainer = document.querySelector("");
const search = document.querySelector("");

const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";


async function makeApiCall() {

    try {

        const response = await fetch(url);

        const namesApi = await response.json();

        console.log(namesApi);

        for (let i = 0; i < namesApi.length; i++ ) {


            if(namesApi[i].location.toLowerCase().startsWith("c")) {
                continue;
            }

            namesContainer.innerHTML += `<div class="result">
            <h3>${namesApi[i].teamName}</h3>
            <p>City: ${namesApi[i].location}</p></div>`;
        }

    
    } catch(error) {
        console.log(error);
    }
};

makeApiCall();

// Displaying a single result from an API call

const contentFromApi = document.querySelector(".content2");

const url = "https://api.rawg.io/api/games/4200?key=54582cd735a340b89b17702eae51578b";

async function aSingleCall() {

    try {
        const response = await fetch(url);
        const singleApi = await response.json();

        
        // console.log(singleApi);

        contentFromApi.innerHTML = `<h1>${singleApi.name}</h1>
                                    <div class="details-image" style="background-image: url('${singleApi.background_image}')"></div>
                                    <time class="details-date">Released: ${singleApi.released}</time>`;
    }
    catch(error) {
        console.log(error);
    }
    
}

aSingleCall(); */


