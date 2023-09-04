/* Write an arrow function where it will do the following: x²

a) Square each array element

b) Calculate the sum of the squared elements

c) Return the average of the sum of the squared elements */

// .......................................................................

const x = (numbs) =>{
    let sum = 0;
numbs.forEach((x) => {
    const square = x*x;
sum += square;
});
const avg = sum / (numbs.length);
return avg;
}
const numbs = [2,4,1,5,4,6,-0];
console.log(x(numbs))                           // 14