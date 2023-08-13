/* You need to create a function that takes a number as input.
 The name of the function will be: isInteger()
  will return a boolean as output:

Returns true if the number is an integer.
otherwise returns false. */

// -----------------------------------------------------------------------------

// (((NOTE: KONO NUMBER KE 1 DIYE BHAAG KORLE JODI VAGSES ZERO HOI TOBE SETA INTEGER)))

function isInteger(x){
    if(typeof x !== "number"){
        return "please provide a number";
    }else{
        if(x%1 === 0){
            return true;
        }else{
            return false;
        }
    }
}

console.log(isInteger(2.35)); //false
console.log(isInteger(2)); //true
