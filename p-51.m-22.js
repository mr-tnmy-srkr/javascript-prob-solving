// find cheapestPhone from an object of array

// ----------------------------------------------------------------

const phones = [
  {
    name: "samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  { name: "lg", camera: 48, storage: "64gb", price: 40000, color: "black" },
  { name: "nokia", camera: 64, storage: "128gb", price: 50000, color: "gray" },
  { name: "vivo", camera: 48, storage: "32gb", price: 20000, color: "golden" },
  {
    name: "oppo",
    camera: 200,
    storage: "128gb",
    price: 75000,
    color: "silver",
  },
];
function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone.name;
    }
  }
  return cheapest;
}
console.log(cheapestPhone(phones));

// output : vivo
