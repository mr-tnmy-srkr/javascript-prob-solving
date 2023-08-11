// dice concept by Math.random

// -----------------------------------------------------

function ludo(number){
for (let i=1; i<=number; i++){
   let random =Math.round(Math.random()*6);
   console.log(random);
}
}
ludo(10);

// or

function rollDice() {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }
  
  // Call the rollDice() function to get the result of rolling the dice
  const diceResult = rollDice();
  console.log("Dice result:", diceResult);