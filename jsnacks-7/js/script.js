// Print the powers of 2 until the number 1000
// Assigning variable (initial)
var number = 1;

// Calculating
for (var i = 1; number < 1000; i++) {
    console.log(number);
    number = Math.pow(2, i);
}