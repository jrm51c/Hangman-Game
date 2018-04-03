// create variables
//===============================================================
// store player wins
var wins = 0;

// store player losses
var losses = 0;

// create an array to store words 
var words = ["apple", "bubble", "carrot", "daytime", "eclipse", "frog", "gandalf", "heart", "illegal", "jalapeno", "kilt","lizard"];

// store word selected by computer
var computerChoice;

// store current player guess
var playerGuess;

// array to store history of player guesses
var guessHistory = [];

// store number of remaining player guesses
var guessesRemaining;

// create an array to store the word selected by the computer
var answer = [];

// create an array to display correct guesses to player
var displayAnswer = [];

// track letters that have not been guessed
var remainingLetters;



//=================================================================

// functions
//=================================================================

// select a new word from the words array
computerChoice = words[Math.floor(Math.random() * words.length)];

answer = computerChoice.match(/\S/g);

// player is given a finite amount of guesses based upon word length
guessesRemaining = computerChoice.length + 3;

 //populate answer array with underscores based upon length of word selected by computer
 for (var i = 0; i < computerChoice.length; i++)  {
  displayAnswer[i] = "_";
}

// This function is run whenever the user presses a key
document.onkeyup = function(event) {

  document.getElementById("currentWord").style.display = "block";
  document.querySelector("#word").innerHTML = displayAnswer.join(" ");

  // determines which key player pressed and stores value 
  playerGuess = event.key;

  // search guess history array to determine if user has already guessed this letter
  // prevent user from selecting non alpha characters
  if (guessHistory.indexOf(playerGuess) === -1 && /^[a-zA-Z]+/.test(playerGuess) && guessesRemaining > 0) {
  // add current guess to guess history
      guessHistory.push(playerGuess);
      //display guess history
      document.querySelector("#guessHistory").innerHTML = "Guess History: " + guessHistory;
      //decrease guesses remaining by 1
      guessesRemaining--;
      //display number of guesses remaining
      document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + guessesRemaining;
      }   else  {
          alert("invalid choice, please choose again");
      }

    // search answer array to determine if player guess exists 
    for (i = 0; i < answer.length; i++) {
      if (playerGuess === answer[i]) {
      displayAnswer.splice([i], 1, playerGuess);
      document.querySelector("#word").innerHTML = displayAnswer.join(" ");
      }
    }

  //compare player guess with computer guess and update the appropriate fields based upon results
  if (guessesRemaining === 0 && displayAnswer.includes("_") === true)    {
    //inform player they lost the game
    youLose();
  }

  if (guessesRemaining === 0 && displayAnswer.includes("_") === false)  {
    //inform player they won the game
    youWin();
  }

  if (guessesRemaining > 0 && displayAnswer.includes("_") === false)  {
      //inform player they won the game
      youWin();
  }

}


    function youWin()   {
      //inform player they won the game
      document.querySelector("#winMessage").style.display = "block";
      
      //update number of wins
      wins++;
      
      //display number of wins
      document.querySelector("#wins").innerHTML = "Wins: " + wins;

      //reset guess history array to default value (empty)
      guessHistory.length = 0;

      //reset remaining guesses to default value 
      guessesRemaining = 0;

      //display guess history
      document.querySelector("#guessHistory").innerHTML = "Guess History: " + guessHistory;

      //display number of guesses remaining
      document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + guessesRemaining;

      //present restart button
      document.querySelector("#restart").style.display = "block";
  }

  function youLose() {
      //inform player they lost the game
      document.querySelector("#loseMessage").style.display = "block";

      //display word selected by computer
      document.querySelector("#word").innerHTML = answer.join(" ");
      
      //update number of losses
      losses++;
                  
      //display number of losses
      document.querySelector("#losses").innerHTML = "Losses: " + losses;
      
      //reset guess history array to default value (empty)
      //guessHistory.length = 0;

      //display guess history
      //document.querySelector("#guessHistory").innerHTML = "Guess History: " + guessHistory;

      //present restart button
      document.querySelector("#restart").style.display = "block";

  }

    function reloadPage() {
      location.reload();
      //display number of losses
      document.querySelector("#losses").innerHTML = "Losses: " + losses;
      //display number of wins
      document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }








  

