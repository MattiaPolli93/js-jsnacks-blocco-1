// To print the highest number inserted by the user
// Assigning variables
var firstNumber = prompt("Hello, please insert a number:");
var secondNumber = prompt("Now insert another one:");

// Calculating
if (firstNumber > secondNumber) {
    alert("The highest number is the first one: " + firstNumber);
} else if (firstNumber < secondNumber) {
    alert("The highest number is the second one: " + secondNumber);
} else if (firstNumber == secondNumber) {
    alert ("Numbers are equal!");
}