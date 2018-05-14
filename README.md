# Hangman-Game
Computer version of children's game of hangman

### Overview

1. [Watch the demo](hangman-game-demo.mov).

2. Game starts when the user selects a key

3. Application selets a random word

   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

4. Number of guesses is limited to length of the word presented + 3

5. Display number of Guesses Remaining: (# of guesses remaining for the user.).

6. Display Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`.)

7. Application will not allow user to select a letter they have previously selected

8. User wins the game if they successfully guess all letters in the word before running out of guesses

9. User loses if they run out of guesses before revealing all the letters in the selected word

10. Application tracks number of wins and losses

11. After the user wins/loses the game should automatically choose another word and make the user play it.


