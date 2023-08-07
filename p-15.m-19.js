/* Write a function called odd_even() which takes an integer
 value and tells whether this value is even or odd.
 You need to do it in 2 ways:Has return + Has parameter
 No return+Has parameter */

 // ----------------------------------------------------------

//  Has return + Has parameter

 function even_odd(num) {
    if (num % 2 === 1) {
        return "Odd";
    } else {
        return "Even";
    }
}

var num1=11;
var num2=10;
var check_num1=even_odd(num1);
var check_num2=even_odd(num2);

console.log(num1 + " is " + check_num1 + " Number");
console.log(num2 + " is " + check_num2 + " Number");

// .................................................................

// No return+Has parameter

 function odd_even(x){
if(x%2===0){
    console.log(x +" is a Even number");
}
else{
    console.log(x +" is a Odd number");  
}
 }
odd_even(5);
odd_even(8);
/* 
output :
11 is Odd Number
10 is Even Number
5 is a Odd number
8 is a Even number */