//  using DOM Manipulation with array

const people = [
    {
        name: "Lea Moon",
        age: 26,
        employment: {
            isEmployed: true,
            occupation: "Doctor"
        },
        hobbies: [
            "shopping"
        ]
    },
    {
        name: "Safian Malik",
        age: 45,
        employment: {
            isEmployed: true,
            occupation: "Nurse"
        },
        hobbies: [
            "fotball"
        ]
    }, 
    {
        name: "Ali Yassin",
        age: 29,
        employment: {
            isEmployed: true,
            occupation: "Desinger"
        },
        hobbies: [
            "Tennis"
        ]
    }, 
    {
        name: "Josef Usman",
        age: 35,
        employment: {
            isEmployed: true,
            occupation: "Rapper"
        },
        hobbies: [
            "fishing"
        ]
    }
];
const peopleContainer = document.querySelector(".people");
for (let i = 0 ; i < people.length; i++) {
 if (people[i].employment.isEmployed && people[i].employment.occupation) {
    peopleContainer.innerHTML += `
    <div class="person">
     <span class="name">${people[i].name}</span> is employed as a ${people[i].employment.occupation}</div>`;
 }
};

//  using DOM Manipulation with 2 function and innerHTML

const addButton = document.querySelector(".add-button");
const totalContainer = document.querySelector(".total");

function getTotal(){
    let numberOne = parseInt(document.querySelector("#firstNum").value);
   let numberTwo = parseInt(document.querySelector("#secondNum").value);
    let result = numberOne + numberTwo;
    let vat = seeVat(result);   
    totalContainer.innerHTML = `The total is ${result} and the VAT is ${vat}`;
};

function seeVat(productTotal) {
    return productTotal * 0.2;
};

addButton.onclick = getTotal;


// Adding event handlers in a loop

const divs = document.querySelectorAll(".content > div"); 

for (let i = 0; i < divs.length; i++) {
    divs[i].onclick = function() {
        console.log(event.target.dataset.price);
    }
};

// A reusable HTML function

const messageContainer = document.querySelector(".message-container");


function createMessage(type = "success", message = "No message") {

    const html = `<div class="message ${type}">${message}</div>`;

    return html;

}

const message = createMessage("success", "OHH YES");

messageContainer.innerHTML = message;