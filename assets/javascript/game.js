// Create variables that hold references to the places in the HTML where we want to display things.
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var wins = document.getElementById("wins")
var losses = document.getElementById("losses")
var guessesLeft = document.getElementById("guessesLeft")
var yourGuesses = document.getElementById("yourGuesses")

// variables for # of w, l, guessesleft and letters guested

var winsNum = 0;
var lossNum = 0;
var guessesLeftNum = 10;
var lettersGuessed = [];

// displays on the screen
wins.textContent = "Wins: " + winsNum;
losses.textContent = "Losses: " + lossNum;
guessesLeft.textContent = "Your Remaining Guesses: " + guessesLeftNum;
yourGuesses.textContent = "Your Guesses: " + lettersGuessed;

console.log(randomLetter)

// function is run whenever the user presses a key.
document.onkeyup = function test(start) {

    var userGuess = start.key;

// Functions for game conditionals
    function win() {

        winsNum++;
        wins.textContent = "Wins: " + winsNum;
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeftNum = 10;
        guessesLeft.textContent = "Your Remaining Guesses: " + guessesLeftNum;
        lettersGuessed = [];
        yourGuesses.textContent = "Your Guesses: " + lettersGuessed;
        alert("You guessed correctly --- You must be Psychic!!!");

        console.log(randomLetter)
        console.log(guessesLeft.textContent)
        console.log(guessesLeftNum)
    }

    function lose() {

        lossNum++;
        losses.textContent = "Losses: " + lossNum;
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeftNum = 10;
        guessesLeft.textContent = "Your Remaining Guesses: " + guessesLeftNum;
        lettersGuessed = [];
        yourGuesses.textContent = "Your Guesses: " + lettersGuessed;
        // alert("If you were Psychic you would have guessed " + alphabet + " You lose");

        console.log(randomLetter)
    }

    function wrongGuess() {

        guessesLeftNum--;
        guessesLeft.textContent = "Your Remaining Guesses: " + guessesLeftNum;
        lettersGuessed.push(start.key);
        yourGuesses.textContent = "Your Guesses: " + lettersGuessed;
       // alert("Incorrect --- You have " + guessesLeftNum + " guesses left --- Try again");
    }


// Conditions that determine the outcome of the game.
    if (alphabet.includes(event.key)) {

        if (randomLetter == userGuess) {

            win();
        }

        else if (guessesLeftNum == 0) {

            lose()
        }

        else {

            wrongGuess()
        }
    }
    console.log(userGuess)

}
