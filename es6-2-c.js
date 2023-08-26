/*  print 
{
  ID01: 'abul vai',
  ID02: 'babul vai',
  ID03: 'habul vai',
  ID04: 'jabul vai'
}
from the given object inside an array */

// ................................................................................

const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]


let obj ={};
Persons.map((person) => {
    // console.log(person)
    const id = person.id;
    const name = person.name;
    obj[id]= name;

})

console.log(obj)