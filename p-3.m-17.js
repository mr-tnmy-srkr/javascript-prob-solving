// You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

// ....................................................

var firstNumber =13;
var secondNumber = 79;
var thirdNumber = 45;

if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
  console.log(`${firstNumber} is grater number`);
} else if (secondNumber >= thirdNumber && secondNumber >= firstNumber) {
  console.log(`${secondNumber} is grater number`);
} else {
  console.log(`${thirdNumber} is grater number`);
}

// output:79 is grater number