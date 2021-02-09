//get values from text input (?)
//add event listener for the button
//add all the possibilities of the dropdown
//append results in the output list

/*window.addEventListener('DOMContentLoaded', start);

function start() {
    console.log("start");
    document.querySelector("#generate-output").addEventListener("click", generateOutput);
}

//function to get values from text input
function getInput() {
    console.log("get input");
}*/

"use strict";

//variable to take input from text field
//const input = document.querySelector("#input").value;
const input = "elena fernandez navarro";

//variables for full names
const firstSpace = input.indexOf(" ");
const lastSpace = input.lastIndexOf(" ");

//1- If input is a first name: Make the first character in a name uppercase, and the rest lowercase
//how to specify it's just a first name? with the firstSpace?
//function firstNameLength(){}
const firstNameUppercase = input.chartAt(0).toUpperCase();
console.log(`The solution is ${firstNameUppercase}`);


//2- If input is a full name: Find the first name
//function firstName(){}
const firstName = input.substring(0,firstSpace);
console.log(`The solution is ${firstName}`);


//3- If input is a full name: Find the length of the first name
//function firstNameLength(){}
const firstNameLength = firstName.lenght;
console.log(`The solution is ${firstNameLength}`);


//4- If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
//function middleName(){}
const middleName = input.substring(firstSpace,lastSpace);
console.log(`The solution is ${middleName}`);

/*
5- If input is a filename: Check if a filename is .png or .jpg
6- If input is a password: Hide a password with the correct number of *s
7- With any input: Make the third character uppercase
8- With any input: Make a character uppercase, if it follows a space or a hyphen
note: Start with handling just the first space, and/or the first hyphen. Plan on how you would make it repeat for multiple occurences, even if you can’t code it succesfully.
*/


/*
function firstNumber() {
    console.log("read first number");
    //const firstNumber = document.querySelector("#firstnumber").value;
    var x = document.querySelector("#firstnumber").value;
    document.querySelector("#firstnumber").innerHTML = x; //not sure if i need this line, not sure if it does anything

    //var x = document.getElementById("myInput").value;
    //document.getElementById("demo").innerHTML = "You wrote: " + x;
    
   //secondNumber();
}
*/