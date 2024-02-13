/* 3) You have an array of objects:

const instructor = [

{name: 'Nodi', age:28, position: 'Senior'},

{name: 'Akil', age:26, position: 'Junior'},

{name: 'Shobuj', age:30, position:'Senior'}

]

Your task is to display the instructor names that has the position senior using filter and 
sort them by their age with ascending order */

// ............................................................................................

const instructor = [
  { name: "Nodi", age: 28, position: "Senior" },

  { name: "Akil", age: 26, position: "Junior" },

  { name: "Shobuj", age: 30, position: "Senior" },
];

const seniorInstructor = instructor.filter((obj) => obj.position === "Senior");
console.log(seniorInstructor);

/*    output : 
      [
        { name: 'Nodi', age: 28, position: 'Senior' },
        { name: 'Shobuj', age: 30, position: 'Senior' }
      ]
       */

const sortedInstructor = instructor.sort((a, b) => a.age - b.age);

console.log(sortedInstructor);

/* output : 
[
  { name: 'Akil', age: 26, position: 'Junior' },
  { name: 'Nodi', age: 28, position: 'Senior' },
  { name: 'Shobuj', age: 30, position: 'Senior' }
] */

