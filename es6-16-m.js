/* const people = [

    { name: 'Meena', age: 20 },
    
    { name: 'Rina', age: 15 },
    
    { name: 'Suchorita', age: 22 }
    
    ];
    
    1) Follow above array of objects. So, you have 3 objects as array 
    
     element. Can you find out the total sum from here?
     
     20+ 15 + 22 = 57. The output will be 57
    
    What are you thinking? Yeah! Do it with for loop. I know you can do it.
    
    But! Wait!! Wait !!! Do the same task using array.reduce() method. */

// ........................................................................................

const people = [
  { name: "Meena", age: 20 },

  { name: "Rina", age: 15 },

  { name: "Suchorita", age: 22 },
];
 
let age = 0;
for (const obj of people) {
  age += obj.age;
}
console.log(age);                                //57

// .....................................................................................
// reduce()

const totalAge = people.reduce((acc,cur) => acc+cur.age,0);
console.log(totalAge);                           //57