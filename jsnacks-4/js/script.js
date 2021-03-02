// To check whether the user's inserted name is inside the array
// Assigning variable to the array
var partyList = ["Steve", "Tony", "Thor", "Natasha", "Bruce", "Clint"];

// Asking the user their name
var userName = prompt("Hi! Were you invited to the party? Insert your name so that we can check it out!");

// Calculating (checking inside the array)
var i;

for (var i = 0; i < partyList.length; i++) {
    if (partyList[i] == userName) {
        alert("Perfect! Have fun at the party tonight!");
    } 
}

alert("Nope, you're not on the list. Bye!");
    