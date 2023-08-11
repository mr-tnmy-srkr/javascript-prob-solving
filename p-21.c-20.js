/* Peter's school teacher asked him to write a program that would 
return true if a number is even and false if a number is odd. 
Help Peter write the program.

Input:
The first and second input lines contain the numbers.

Output:
Print true if the number is an even number and false if the number is an odd number. */

// -----------------------------------------------------------------------------------------

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }

}
const myNumber1 = isEven(303);
const myNumber2 = isEven(304);
console.log(myNumber1);   // false
console.log(myNumber2);   // true


