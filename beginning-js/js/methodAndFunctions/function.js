// string using backticks

const name = "Moa";
const surname = "Allawi";
const sentence  = `
      <div>
        <p>Hello ${name}</p>
        <p>Hello ${surname}</p>
        <p>Hello Welcome here Maan!</p>
     </div>
`;
console.log(sentence); 

// Accessing object properties using brackets and  import method

import {pets} from "../js/export/export-import.js";
console.log(pets["age-pets"]);
console.log(pets["1"]); 

// Functions inside objects

const pet = {
    type: "cat",
    name: "Mia",
    isFrendly: false,
    sayHello: function() {
        console.log("Hello my name is " + this.name);
    }
};
console.log(pet);
pet.sayHello(); 

// variable to the console in table format.

const instruments = [
    {
        type: "guitar",
        colour: "red",
    },
    {
        type: "piano",
        colour: "black",
    },
];

console.table(instruments);

// localStorage

const localTry = "First try"; 

localStorage.setItem("attemptOne", localTry);
localStorage.setItem("attemptTwo", "local Try 2");

localStorage.removeItem("attemptTwo");
localStorage.clear();

// JSON.stringify - to save 
// JSON.parse - when retriv

const colours = ["red", "blue", "red"];

localStorage.setItem("colours", JSON.stringify(colours)); 

const mycolours = localStorage.getItem("colours");

const parsedColours = JSON.parse(mycolours); 

console.log(typeof parsedColours); 
 

// forEach method

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(names, index) {
    console.log(`Prize ${index}: ${names}`);
});

// Functions as arguments with callbacks

function receivingFunction(callout) {
    console.log(typeof callout);
    callout();
};

const callbackFunction = function() {
    console.log("I am a callback function");
};
 
receivingFunction(callbackFunction);

// setTimeout method

const loader = document.querySelector(".loader");

setTimeout(function(){
    loader.innerHTML ="Done loading!";

}, 2000); 

//  SetInterval method

const container = document.querySelector(".Interval");

let count = 0; 

function createHTML() {
    
    count++;

    if(count === 10) {
        clearInterval(secondIntervalId);
    }

    container.innerHTML += `<div class="item">${count}</div>`;
};

const secondIntervalId = setInterval(createHTML, 1500); 

const itervaldId = setInterval(function(){
    count++;

    if(count === 5) {
        clearInterval(itervaldId);
    }

    console.log(count);

},1000);

// Find method wich returns a single item

const people = [{ id: 1, name: "Sofia"}, { id: 2, name: "Saif"}, { id: 3, name: "Peter"}];

const person = people.find((person) => {
    if(person.id === 3) {
        return true;
    }
});

console.log(person);
 