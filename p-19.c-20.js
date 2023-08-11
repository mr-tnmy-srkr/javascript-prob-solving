/* The standard height of a volleyball player is 7 feet.
   Jim wants to join the volleyball team, so he decided to measure
   his height to see if he meets the standard. Calculate his height in feet.
   To convert inch to feet:feet inch / 12

   Input:

   The input line has the height in inch.

   Output:

   Print the height in feet. */

//    -------------------------------------------------------------------

function inchToFoot(inches){
const feet = inches / 12;
return feet;
}
const inchData = 84;
const heightInFeet = inchToFoot(inchData);
console.log(heightInFeet);

// output: 7