// How could you find all prime factors of a number?

const primeFactors = (num) => {
    let factors = [];
    let divisor = 2;

    while (num > 2) {
        if (num % divisor === 0) {
            factors.push(divisor)
            num /= divisor
        } else {
            divisor++
        }
    }
    return factors

}

console.log(primeFactors(69));  //[ 3, 23 ]
console.log(primeFactors(75));  //[ 3, 5, 5 ]
console.log(primeFactors(125)); //[ 5, 5, 5 ]