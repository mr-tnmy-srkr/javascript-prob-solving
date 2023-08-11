// array names in descending order (as a length)

//  -------------------------------------------------------------------------------

const name1 = ["anish", "apu", "bisu", "biswas", "rabindra", "basudeb"];
const name2 = ["anish"];

function smallestName(name) {
  if (name.length < 2) {
    return "Array should have at least two elements";
  }
  name.sort(function (a, b) {
    return b.length - a.length;
  });
  return name;
}
console.log(smallestName(name1));  
console.log(smallestName(name2)); 

/*
output : 
[ 'rabindra', 'basudeb', 'biswas', 'anish', 'bisu', 'apu' ]

Array should have at least two elements
*/