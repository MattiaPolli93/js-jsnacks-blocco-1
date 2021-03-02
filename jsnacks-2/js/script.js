// To display the shortest and then the longest word
// Assigning variables
var firstWord = prompt("Hello! Please insert a word:");
var secondWord = prompt("Now insert a second word:");

// Calculating
if (firstWord.length > secondWord.length) {
    console.log("Longest word: " + firstWord);
    console.log("Shortest word: " + secondWord);
} else if (firstWord.length < secondWord.length) {
    console.log("Longest word: " + secondWord);
    console.log("Shortest word: " + firstWord);
} else if (firstWord == secondWord) {
    console.log("Same length!");
}
