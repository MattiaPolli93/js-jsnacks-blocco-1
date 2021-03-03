// Ask the user a number, then print the cube of all the previous integer numbers and the user's number
// Assigning variable and asking the user
do {
    var userNumber = parseInt(prompt("Hello, please write a number!"));
} while (isNaN(userNumber));

// Calculating
for (var i = 1; i <= userNumber; i++) {
    console.log(Math.pow(i, 3));
}