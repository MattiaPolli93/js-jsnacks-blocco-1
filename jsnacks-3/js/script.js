// To print the sum of 10 numbers inserted by the user
// Assigning variables
var sum = 0;
var i;

// Calculating
userNumber = 0;
// Asking the user to insert numbers
var userNumber = alert("Hello, please insert a number in the following dialogs:");
for (var i = 0; i < 10; i++) {
    // Adding number to the sum
    sum += parseInt(prompt(i + 1 + "° number: "));
}

// Display
console.log("The sum is " + sum);