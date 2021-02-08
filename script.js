window.addEventListener('DOMContentLoaded', start);

//get values from text input (?)
//add event listener for the button
//add all the possibilities of the dropdown
//append results in the output list

function start() {
    console.log = ("start");
    document.querySelector("#generate-output").addEventListener("click", generateOutput);
}

//function to get values from text input
function getInput() {
    console.log = ("get input");
}
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



/*
1- If input is a first name: Make the first character in a name uppercase, and the rest lowercase

2- If input is a full name: Find the first name
3- If input is a full name: Find the length of the first name
4- If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
5- If input is a filename: Check if a filename is .png or .jpg
6- If input is a password: Hide a password with the correct number of *s
7- With any input: Make the third character uppercase
8- With any input: Make a character uppercase, if it follows a space or a hyphen
note: Start with handling just the first space, and/or the first hyphen. Plan on how you would make it repeat for multiple occurences, even if you can’t code it succesfully.
*/