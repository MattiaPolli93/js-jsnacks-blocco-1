// Ask the user a number, then print the cube of all the previous integer numbers and the user's number
// Assigning variable
var userNumber = parseInt(prompt("Hello, please write a number!"));

// Calculating
for (var i = 1; i <= userNumber; i++) {
    alert(Math.pow(i, 3));
}