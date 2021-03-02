// To ask the user if their inserted number (in the array) is uneven
// Creating array and assigning variables
var numberList = [];
var i;

// adding uneven numbers to the array
for (var i = 1; i <= 6; i++) {
    var userNumber = parseInt(prompt("Please insert 6 random numbers:"));
    if (!isNaN(userNumber) && (userNumber % 2 == 1)) {
        numberList.push(userNumber);
    } 
}

// Display
console.log(numberList);