// Verify a prime number?

const primeCheck = (num) => {
    if(num<2){
        return "please enter a number which is greater than 1"
    }
    for (i = 2; i < num; i++) {  
        if (num % i === 0) {
          return  isPrime = "Not Prime"
        }
    }
    return isPrime = "Prime"
}
console.log(primeCheck(9)); // Not Prime
console.log(primeCheck(11)); // Prime