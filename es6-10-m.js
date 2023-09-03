/* Write an arrow function where it will do the following:

a) It will take an array where the array elements will be the name of your friends

b) Check if the length of each element is even, push elements with even length to a 
new array and return the result */

// ..........................................................................................
const evenLengthName = [];
const x =(arr) => {
arr.forEach(name => {
    const nameLength = name.length;
  if (nameLength%2==0) {
    evenLengthName.push(name);
 }   
    
})
}

const array = ['john','doe','jimmy','anderson','saurav','msdhoni'];
x(array);
console.log(evenLengthName);             //[ 'john', 'anderson', 'saurav' ]