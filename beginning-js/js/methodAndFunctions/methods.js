// falsy values
// '' or "" or `` - empty strings
// 0 
// false
// undefined
// null
// NaN

const test = "";

if(test) {
    console.log("truthy");
}
else {
    console.log("falsy");
}


const haveName = [
    {
        name: " ",
        alive: true
    },
    {
        name: "",
        alive: false
    },
];

haveName.forEach(function(haveName) {
    
    let alive = "Unknown";
    
    if(haveName.alive !== null) {
        alive = haveName.alive;
    }
    
    console.log(alive);
    
})

// click Event method 

/* const clickMe = document.querySelector(".cicrel");

function click() {
    event.target.classList.toggle("rotate180");

    if(event.target.innerHTML === "Noooooo") {
        event.target.innerHTML = "Click me!";
    } else {
        event.target.innerHTML = "Noooooo";
    }

    console.log(remainder);

};

clickMe.onclick = click;  */

// remainder % method 

const remainder = 40 % 40;

console.log("Remainder " +remainder);

// Default parameter values

/* function sum(numA = 0, numB = 0) {
   return numA + numB;
}

const result = sum(0, 0);

console.log(result); */
 
//  try-catch-finally 

/* function getSomething() {

};

const result = document.querySelector(".result");


try {
    getSomething();
    console.log("success");
    result.innerHTML = "Success!";
}
catch(error) {
    console.log("error occurred", error);
    result.innerHTML = "Nah there was an error!";
}
finally {
    console.log("finally");
} */

// Arrow functions 

const logMessage = name => `Hello ${name}!`;

const name = logMessage("Mohammed");

console.log(name);

// Arrow functions with numbers 

const  add = (a, b) => a + b;

const result = add(1,5);

console.log(result);

// Arrow functions with array 

const arr = ["blue", "red", "green"];

arr.forEach(item => console.log(item));

// Arrow functions with setTimeout

setTimeout(() => console.log("setTimeout One 1 sek"), 1000);

// Arrow functions with filter function with number

const numbers = [1, 3, 6, 8, 10, 13, 16];

const filteredNumbers = numbers.filter((number) => number % 2 === 0);

// Arrow functions with filter function with names

const names  = ["Ali", "Bilal", "Yousef",  "Victoria", "Doaa", "Sarab"];


const filteredNames = names.filter((name) => name.toLowerCase().includes("a"));

// using the filter method on an array of objects

const people = [{ id: 1, name: "Alice"}, { id: 2, name: "Anders"}, { id: 3, name: "Mari"}];

const filteredPeople = people.filter((person) => {
    if(person.name.toLowerCase().startsWith("m")) {
        return true;
    }
});