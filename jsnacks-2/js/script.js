// To display the shortest and then the longest word
// Assigning variables
var firstWord = prompt("Hello! Please insert a word:");
var secondWord = prompt("Now insert a second word:");

// Calculating
if (firstWord.length > secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);
} else if (firstWord.length < secondWord.length) {
    console.log(secondWord);
    console.log(firstWord);
}
