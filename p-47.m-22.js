// remove duplicate items from an array

// -------------------------------------------------------------------

const names = ["abul", "babul", "cabul", "babul", "abul", "dabul"];
function removeDuplicate(names) {
  const uniqueNames = [];
  for (let i = 0; i < names.length; i++) {
     const name = names[i];
      if (!uniqueNames.includes(name)) {
      uniqueNames.push(name);
    }
  }
  return uniqueNames;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

// output : [ 'abul', 'babul', 'cabul', 'dabul' ]
