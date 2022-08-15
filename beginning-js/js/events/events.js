// scroll event

const nav = document.querySelector("nav");
const header = document.querySelector("header");

function handleScroll() {

    const scrolledY = window.scrollY;

    if(scrolledY > 50) {
        document.body.classList.add("scrolled");
        nav.classList.add("scrolled");
        header.classList.add("scrolled");
    } 
    else {
        document.body.classList.remove("scrolled");
        nav.classList.remove("scrolled");
        header.classList.remove("scrolled");

    }

};

window.addEventListener("scroll", handleScroll)



// mouseover and mouseout events

const hoverDiv = document.querySelectorAll(".div-container > div"); 
const display = document.querySelector(".display"); 

for (let i = 0; i < hoverDiv.length; i++) {
    hoverDiv[i].onmouseover = function() {
        const content = event.target.dataset.content;
        display.innerHTML = content;

    }

    hoverDiv[i].onmouseout = function() {
        display.innerHTML = "";
    }
};

// onchange event with setTimeout

const dropdown = document.querySelector("select");
const cicrelContainer = document.querySelector(".circles");

dropdown.onchange = function() {
    console.log(event.target.value);

    const selectedValue = this.value;

    cicrelContainer.innerHTML = "Loading...";

    setTimeout(function(){
        cicrelContainer.innerHTML = "";
        for(let i = 1; i <= selectedValue; i++) {
            let className = "";
    
            if (i % 2 === 0) {
                className = "highlight"
            }
    
            cicrelContainer.innerHTML += `<div class="cicrel ${className}">${i}</div`;
        }

    }, 2000);

};

// onkeyup event method

const message =document.querySelector("textarea");
const characterCount =document.querySelector(".character-count span");
const sumitButton = document.querySelector(".sumitButton");

message.onkeyup = function() {
    console.log(event.target.value.length);

    const len = event.target.value.length;

    characterCount.innerHTML = len;

    if(len >= 4) {
        sumitButton.disabled = false;
    } else {
        sumitButton.disabled = true;
    }
};

// API call error handling
// call to fetch data from an API


const url2 = "https://noroff.herokuapp.com/v1/cat-facts/facts";

const resultsContainer = document.querySelector(".results");

async function getCats() {

    try {

     const response = await fetch(url2);

     const facts = await response.json();

     resultsContainer.innerHTML = "";

     for (let i = 0; i < facts.length; i++) {

        if (i === 4) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
    }

    } catch (error) {
        console.log("An error occurred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
};

getCats();

function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
};


