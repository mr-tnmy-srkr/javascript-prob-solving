/* Problem - 2

1. You will be given a function called “matchFinder()” 
which will take a string as input.
Task:
1. If you can find a complete match of the second string 
with any part of the first string, then you are in the field.
If it returns boolean you must return true.

2. And if you can't find the full match in that field you
 will return boolean false.

3. Bonus: Data will validate whether the input string is
 valid or not. If double or any is an input string
Otherwise, you will return a small amount of money.


Sample Input Sample Output
“John Doe”,“ohn” true
“JavaScript”,“Code” false
“Peter Parker”,“Pen” false
“Peter Parker”,”pet” false */

// -------------------------------------------------------------------------------

function matchFinder(string1, string2) {
  if (
    typeof string1 !== "string" ||
    typeof string2 !== "string" ||
    !string1 ||
    !string2
  ) {
    return "Please enter a valid string!";
  }
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}


let string1 = "John";
let string2 = "ohn";

let string3 = ["JavaScript"];
let string4 = "Code";

let string5 = "";
let string6 = "Pen";

let string7 = "Peter vai";
let string8 = "pet";

console.log(matchFinder(string1, string2));
console.log(matchFinder(string3, string4));
console.log(matchFinder(string5, string6));
console.log(matchFinder(string7, string8));

// output

/* true
Please enter a valid string!
Please enter a valid string!
false */