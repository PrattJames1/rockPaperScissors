var userChoice = prompt("Rock, Paper or Scissors? ");
console.log("Your choice: " + userChoice);

var computerChoice = Math.random();

if (computerChoice < .34) {
    computerChoice = "rock";
    console.log("Computer's choice: " + computerChoice);
} 
else if (computerChoice < .67) {
    computerChoice = "paper";
    console.log("Computer's choice: " + computerChoice);
} 
else {
    computerChoice = "scissors";
    console.log("Computer's choice: " + computerChoice);
}


var compareChoices = function(choice1, choice2){
    if (choice1 === choice2) {
        return "Tie!";
    } 
    else if (choice1 === "rock") {
        if (choice2 === "paper") {
            return "Paper beats rock!";
        } 
        else {
            return "Rock beats scissors!";
        }
    } 
    else if (choice1 === "paper") {
        if (choice2 === "scissors") {
            return "scissors beats paper!";
        }
        else {
            return "Paper beats rock!";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "Rock beats scissors!";
        }
        else {
            return "Scissors beats paper!"; 
        }
    }

};

console.log(compareChoices(userChoice, computerChoice));