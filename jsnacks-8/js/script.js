// Ask a 4-digit number and then print the sum of its digits
// Asking the user (variables)
var userNumber = prompt("Please insert a number");
var sum = 0;

// Calculating
for (var i = 0; i < userNumber.length; i++) {
    sum += parseInt(userNumber[i]);
}

// Displayed message
alert("The sum of the digits in the number " + userNumber + " is " + sum);