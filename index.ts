#! /usr/bin/env node
// shebang

import inquirer from "inquirer";

const computerGenerated: number = Math.floor(Math.random()*10);
// line 8 variable stores the number generated randomly by computer

// const in line 10 stores the user guesssed number.
const userInput = await inquirer.prompt([
  {
    // an object, storing key value;
 // key  : value
    name: "guessedNumber",
    type: "number",
    message: "Guess a Number digit '0-9'",
  },
]);

// putting on conditions to tell the user wether user was right or wrong.
if (userInput.guessedNumber === computerGenerated) {
  console.log("You're the winner!");
  // this prints only if user guessed the right number.
} else {
  console.log(`Correct answer is ${computerGenerated} Better luck next time`);
  // this prints only when the user guessed wrong number.
}
