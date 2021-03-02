// Check whether the user's inserted name is inside the array
// Assigning variable to the array
var partyList = ["Steve", "Tony", "Thor", "Natasha", "Bruce", "Clint"];

// Asking the user their name and assigning variables
var userName = prompt("Hi! Were you invited to the party? Insert your name so that we can check it out!");
var invited = false;

// Calculating (checking inside the array)
for (var i = 0; i < partyList.length; i++) {
    if (partyList[i] == userName) {
        invited = true;
    } 
}

// Display
if (invited) {
    alert("Perfect mighty Avenger! Have fun at the party tonight!");
} else {
    alert("Nope, you're not on the list. Bye!");
}
    