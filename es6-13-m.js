/* 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9]. 
Now convert this array into an even array (array with even numbers). 
[ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. 
Hints: add one to any odd number and it will become an even number */

// ....................................................................................


// Array.map()

const oddNumbs = [ 1, 3, 5, 7, 9];
const evenNumbs = oddNumbs.map(x => {
return x+1;
});
console.log(evenNumbs);               //[ 2, 4, 6, 8, 10 ]

// for loop

let evenNumbers=[];
for(i=0;i<oddNumbs.length;i++){
 const evenNumbs = oddNumbs[i] + 1;
 evenNumbers.push(evenNumbs);
}
console.log(evenNumbers)              //[ 2, 4, 6, 8, 10 ]

// for of loop
let evenArr=[];
for(let numb of oddNumbs){
    evenArr.push(numb+1);
}
console.log(evenArr);                 //[ 2, 4, 6, 8, 10 ]