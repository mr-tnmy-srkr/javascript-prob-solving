// find second smallest name from an array (as a length)

//  -------------------------------------------------------------------------------

const name1 = ["anish", "apu", "bisu", "biswas", "rabindra", "basudeb"];
const name2 = ["anish"];

function smallestName(name) {
  if (name.length < 2) {
    return "Array should have at least two elements";
  }
  name.sort(function (a, b) {
    return a.length - b.length;
  });
  return name[1];
}
console.log(smallestName(name1));  
console.log(smallestName(name2)); 

/*
output : 
bisu
Array should have at least two elements 
*/