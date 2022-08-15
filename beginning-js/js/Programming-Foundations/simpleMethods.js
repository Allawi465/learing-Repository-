// Using joining strings together method, alert your name
  
var firstName = "Mohammed";
var lastName = "Allawi"
var fullName = firstName + " " + lastName; 
console.log (fullName); 

//  Using the alert() method, alert your name

alert("Allawi");  

//  Using the typeof() method

console.log (typeof "frog")
var frog = "string"
console.log ("The type of frog is" + " " + frog)
var someVar;
console.log (typeof "someVar") 

//  using the loop i method

for (var i = 7; i <= 13; i ++) {
    console.log(i);
} 

//  using if..else method

var orderHasShipped = true; 
if (orderHasShipped) {
    console.log("The order shipped");
}
else {
    console.log("The order did not ship");
} 

//  using the array method 

var animals = ["dog", "cat", "frog"];
var firstItem = animals[0];
var numberOfAnimals = animals.length;
for (var i = 0; i < numberOfAnimals; i++ ) {
    console.log(animals[i]);
} 

//   using type coercion method with == very bad method

var stringFour = "4";
var numberFour = 4;
if(stringFour == numberFour) {
    console.log("equal");
}
else {
    console.log("not equal");
} 

//  using array method with filter out

var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
];

var filterPetsAge = pets.filter ((pets) => {
      return pets.age <= 4
  });

console.log(filterPetsAge)

//  Looping through an array of objects

var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
];

for (var i = 0; i < pets.length; i++ ) {
  if (pets[i].age >= 4) {
    console.log(pets[i].type);
  }
};

//  using type of on function

function questionTwo(answer) {
  if ((typeof answer === "boolean")) {
    console.log(answer);
}
else {
    console.log("Please pass a boolean value in");
}
}

questionTwo("false");

// using function with return

function addNumber(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}
var sum = addNumber (2,5);

console.log ("The return number is " + sum); 

//  using function with 2 return

function person(name, age){
  if (age < 29) {
    return name + age + " are underage"
  }
  else {
    return name + " are older than 29 years"
  }
}

console.log (person("Allawi ", 23));

// Returning values from functions

function checkPassword(stringToCheck) {
    
  const lengthOfString = stringToCheck.length;
  
  if(lengthOfString >= 10) {
      return true;
  }
  else {
      return false;
  }
  
}

const passwordIsValid = checkPassword("some string");

console.log(passwordIsValid);

if(passwordIsValid) {
  // let user register
}
else {
  // inform user their password is invalid
}