/* run a loop from 30 to 86.This loop will 
get stops if values get higher than 50; */

var i=30;
for( ; i <= 86 ; i++){
    console.log("Current value:", i);
    if (i > 50) {
        console.log("Value exceeded 50. Loop stopped.");
        break;
      }
}