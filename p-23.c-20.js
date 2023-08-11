// Factorial value

// .................................................................... 

 function factorial(number){
let result = 1;
for(let i=number;i>=1;i--){
    result = result * i;
}
return result;
} 


const factorialResult1 = factorial(0); //1
const factorialResult2 = factorial(1); //1
const factorialResult3 = factorial(10); //3628800
console.log(factorialResult1);
console.log(factorialResult2);
console.log(factorialResult3); 

// .....................................................................
//                      by recursion function
// .....................................................................

function fact(n){
    if(n===1 || n===0){
        return 1;
    } else{
        return n * fact(n-1);
    }
}

const factorialResult4 = fact(0); //1
const factorialResult5 = fact(1); //1
const factorialResult6 = fact(10); //3628800
console.log(factorialResult4);
console.log(factorialResult5);
console.log(factorialResult6);