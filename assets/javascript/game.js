// create variables
//===============================================================
// control selection of new word
gameOver = true;

// store player wins
var wins = 0;

// store player losses
var losses = 0;

// create an array to store words 
var words = ["apple", "bubble", "carrot", "daytime", "eclipse", "frog", "gandalf", "heart"];

// store word selected by computer
var computerChoice;

// store current player guess
var playerGuess;

// array to store history of player guesses
var guessHistory = [];

// store number of remaining player guesses
var guessesRemaining;

// create an array to store the answer
var answer = [];

// track letters that have not been guessed
var remainingLetters;

//select a new word from the words array
 computerChoice = words[Math.floor(Math.random() * words.length)];

 guessesRemaining = computerChoice.length;

//=================================================================

// functions
//=================================================================

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
console.log(computerChoice);

  //Randomly selects a choice from the words array and stores value.
  //checking value of gameOver ensures computer only selects one word per game
  //if (gameOver) {
  //select a new word from the words array
  //computerChoice = words[Math.floor(Math.random() * words.length)];
  //}

  //populate answer array with underscores based upon length of word selected by computer
  for (var i = 0; i < computerChoice.length; i++)  {
      answer[i] = "_";
  }

  //display underscores in answer array
  document.querySelector("#word").innerHTML = answer.join("     ");

  // Determines which key player pressed and stores value 
  playerGuess = event.key;

  // determine if player guess matches a character in the word selected by the computer
  if (computerChoice.includes(playerGuess))  {
      alert("matches");
      guessesRemaining--;
      //display number of guesses remaining
      document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + guessesRemaining;
  } else {
        // add current guess to guess history
        guessHistory.push(playerGuess);
        //display guess history
        document.querySelector("#guessHistory").innerHTML = "Guess History: " + guessHistory + " ";
        //decrease guesses remaining by 1
        guessesRemaining--;
        //display number of guesses remaining
        document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + guessesRemaining;
    } 
  }

/*
//===============================================================================
  if (guessHistory.length === 0 && /^[a-zA-Z]+/.test(playerGuess))  {
    // add current guess to guess history
    guessHistory.push(playerGuess);
    //display guess history
    document.querySelector("#guessHistory").innerHTML = "Guess History: " + guessHistory + " ";
    //decrease guesses remaining by 1
    guessesRemaining--;
    //display number of guesses remaining
    document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + guessesRemaining;

  } else if (guessHistory.indexOf(playerGuess) === -1 && /^[a-zA-Z]+/.test(playerGuess) && guessesRemaining > 0) {
    // add current guess to guess history
    guessHistory.push(playerGuess);
    //display guess history
    document.querySelector("#guessHistory").innerHTML = "Guess History: " + guessHistory + " ";
    //decrease guesses remaining by 1
    guessesRemaining--;
    //display number of guesses remaining
    document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + guessesRemaining;
  } else  {
    alert("fuck you!!");
  }
*/
//=========================================================================================================================




  // give player a finite amount of guesses based upon length of word selected by computer
  //guessesRemaining = (computerChoice.length + 3);


  //display number of guesses remaining
  //document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses : " + guessesRemaining;


/*
    // determine if letter selected by player exists in the word
    //if (currentWord.search(playerGuess)) {}

    if (guessesRemaining < 0 )  {
      //var position = currentword.indexof(playerguesxs);
      //return position;
      alert("pud");
    }

    //console.log(position);*/







  

