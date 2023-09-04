/* Write an arrow function where it will do the following:

a) It will take two array inputs

b) Combine the two arrays and assign them in a new array

c) Find the maximum number from the new array and return the result */

// ..........................................................................

const x = (a,b) => {
const newArr = m.concat(n);
return Math.max(...newArr);
}

const m = [1,2,4,3,5,2,4];
const n = [8,5,4,7,6,8,3];
console.log(x(m,n));                        //8