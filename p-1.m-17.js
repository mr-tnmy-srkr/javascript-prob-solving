// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.
// ......................................................
// ......................................................

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.

var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.indexOf("Banana")); // 1 --> index number of banana 

var removedFruits = fruits.splice(1, 1, "Mango"); 
console.log(removedFruits); // Banana  --> removed fruits
console.log(fruits); // ['Apple', 'Mango', 'Orange']

// .........................................................
//                           pop and push
// .........................................................

// b) Remove ‘Orange’ and add ‘Watermelon’.

var lastRemovedElement = fruits.pop(); 
console.log(lastRemovedElement); // Orange
console.log(fruits); // ['Apple', 'Mango']

var newArray = fruits.push('Watermelon');
console.log(newArray); // 3  --> returns new array length.
console.log(fruits); //  ['Apple', 'Mango', 'Watermelon']

// .........................................................
//                         extra practice
// .........................................................

var fruitName = fruits[2];
console.log(fruitName); //Watermelon

fruits[1] = "Guava";
console.log(fruits); //[ 'Apple', 'Guava', 'Watermelon' ]

var guavaIndex = fruits.indexOf("Guava");
console.log(guavaIndex); // 1

// .........................................................
//                         shift and unshift
// .........................................................
var newFirstFruit = fruits. unshift("Cucumber");
console.log(newFirstFruit); // 4  --> returns new array length.
console.log(fruits); //[ 'Cucumber', 'Apple', 'Guava', 'Watermelon' ]

var removeFirstFruit = fruits.shift();
console.log(removeFirstFruit); // Cucumber
console.log(fruits); // [ 'Apple', 'Guava', 'Watermelon' ]