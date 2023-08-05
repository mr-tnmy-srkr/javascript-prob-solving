// You are given a triangle with the sides 9, 8, 9. Write a program
// to check whether a triangle is Equilateral,Isosceles or Scalene using if-else.

// (Isosceles => two sides are equal)

// ........................................................

var firstSide = 9;
var secondSide = 8;
var thirdSide = 9;

if (
  firstSide + secondSide > thirdSide &&
  secondSide + thirdSide > firstSide &&
  thirdSide + firstSide > secondSide
) {
  if (firstSide === secondSide && secondSide === thirdSide) {
    console.log("It is a Equilateral Triangle");
  } else if (
    firstSide === secondSide ||
    firstSide === thirdSide ||
    secondSide === thirdSide
  ) {
    console.log("It is a Isosceles Triangle");
  } else {
    console.log("It is a Scalene Triangle");
  }
} else {
  console.log("It is not a triangle");
}
// output:It is a Isosceles Triangle