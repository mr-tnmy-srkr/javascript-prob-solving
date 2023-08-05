// You and your friends Tom, Jane, Peter and John got their final exam results.
// Your total score is 85, Tom’s total score is 66, Jane’s total score is 35,
//  Peter’s total score is 56 and John’s total score is 40. The grading chart is:
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.

// ..................................................................................

var myScore = 85;
var tomScore = 66;
var janeScore = 35;
var peterScore = 56;
var johnScore = 40;

if (myScore >= 80) {
  console.log("I got A");
} else if (myScore >= 60) {
  console.log("I got B");
} else if (myScore >= 50) {
  console.log("I got C");
} else if (myScore >= 40) {
  console.log("I got D");
} else {
  console.log("I got F");
}

if (tomScore >= 80) {
  console.log("Tom got A");
} else if (tomScore >= 60) {
  console.log("Tom got B");
} else if (tomScore >= 50) {
  console.log("Tom got C");
} else if (tomScore >= 40) {
  console.log("Tom got D");
} else {
  console.log("Tom got F");
}

if (janeScore >= 80) {
  console.log("jane got A");
} else if (janeScore >= 60) {
  console.log("jane got B");
} else if (janeScore >= 50) {
  console.log("jane got C");
} else if (janeScore >= 40) {
  console.log("jane got D");
} else {
  console.log("jane got F");
}

if (peterScore >= 80) {
  console.log("Peter got A");
} else if (peterScore >= 60) {
  console.log("Peter got B");
} else if (peterScore >= 50) {
  console.log("Peter got C");
} else if (peterScore >= 40) {
  console.log("Peter got D");
} else {
  console.log("Peter got F");
}

if (johnScore >= 80) {
  console.log("John got A");
} else if (johnScore >= 60) {
  console.log("John got B");
} else if (johnScore >= 50) {
  console.log("John got C");
} else if (johnScore >= 40) {
  console.log("John got D");
} else {
  console.log("John got F");
}

//output:
// I got A
// Tom got B
// jane got F
// Peter got C
// John got D
