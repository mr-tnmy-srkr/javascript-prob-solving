/* Problem - 4

You will be given a function called “findAddress()” 
which takes an object as input. of Object
There will be three properties.

Task:
1. You have to return the output in the format of 
the 1st sample output.

2. Bonus: If any property of object is missing,
 double underscore that part in the field.
will be replaced with (in the format of the 2nd output)

given input and sample output

{street:10,house:“15A”,society:“EarthPerfect”}
10,15A,Earth Perfect

{street:10,society:“Earth Perfect”
   10,__,Earth Perfect

{street:10} 
10,__,__
 */
// -------------------------------------------------------------------------/

function findAddress(obj) {
  const requiredKeys = ["street", "house", "society"];
  let results = "";
  for (let x = 0; x < requiredKeys.length; x++) {
    let requiredValue = requiredKeys[x];
    if (!obj[requiredValue]) {
      results += "__" + ",";
    } else {
        results += obj[requiredValue] + ",";
    }
  }
return results.slice(0,-1);
}

const obj1 = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
const obj2 = {
  street: 10,
  // house: "15A",
  society: "Earth Perfect",
};
const obj3 = {
  street: 10,
  // house: "15A",
  // society: "Earth Perfect",
};
console.log(findAddress(obj1));
console.log(findAddress(obj2));
console.log(findAddress(obj3));

// output
/* 10,15A,Earth Perfect
10,__,Earth Perfect
10,__,__ */