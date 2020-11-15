/* Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
The items are compared, and whichever player chooses the more powerful item wins.
This program helps with the practice and use of the different types of function in JavaScript*/

// Get the user’s choice (Arrow function)//
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error. Enter a choice between: rock, paper or scissors.');
  }
}

// Get the computer’s choice (Arrow function)//
const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3)
  if (number === 0) {
    return 'rock'
  } else if (number === 1) {
    return 'scissors'
  } else {
    return 'paper'
  }
}

//Compare the two choices and determine a winner. (Function declaration)//
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie'
  }
  if (userChoice === 'bomb') {
    return 'The user won!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'The User won!'
    } else {
      return 'The Computer won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'The User won!'
    } else {
      return 'The computer won!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'The User won!'
    } else {
      return 'The Computer won!'
    }
  }
}
//Start the program and display the results. The user choice is made here. (Function expression)//
const playGame = function() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`This is the user choice: ${userChoice}\nThis is the computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
