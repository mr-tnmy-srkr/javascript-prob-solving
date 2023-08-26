// marriage groom selection

const groom = [
    { name: "Abul", job: "govt", salary: 17000 },
    { name: "Babul", job: "private", salary: 25000 },
    { name: "Kabul", job: "govt", salary: 21000 },
    { name: "Habul", job: "private", salary: 47000 },
    { name: "Jabul", job: "govt", salary: 23000 },
    { name: "Mabul", job: "private", salary: 55000 },
  ];

  const luckyPersons = groom.filter((groom) => (groom.job === "govt" && groom.salary >=20000) || (groom.job === 'private' && groom.salary >=40000))
//   console.log(luckyPersons)

  const indexNumber = Math.floor(Math.random()*luckyPersons.length)
  
  const finalGroom = luckyPersons[indexNumber].name;

  console.log(`${finalGroom}, you win...!`)

/*   2 random outputs : 
Jabul, you win...!

Mabul, you win...!
   */