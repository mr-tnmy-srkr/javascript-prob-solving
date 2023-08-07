/* Write a function called make_avg() which will 
take an three integers and 
return the average of those values. */

// ---------------------------------------------------------------

function make_avg(x,y,z){
var sum = x+y+z;
var average = sum/3;
return average;
}
var averageValue =make_avg(10,9,11);
console.log("Average:", averageValue);  //Average: 10