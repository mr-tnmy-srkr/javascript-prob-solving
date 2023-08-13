// find total sum from the object(quantity * price)

// ---------------------------------------------------------------------

const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 2200, quantity: 5 },
  { name: "pant", price: 3700, quantity: 4 },
  { name: "belt", price: 600, quantity: 3 },
];
function totalCost(products) {
  let sum = 0;
  /*   for(let i = 0; i<products.length; i++){
    const product = products[i];
    sum = sum + product.price * product.quantity;
    }  */
  for (let i in shoppingCart) {
    sum = sum + shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return sum;
}
const sum = totalCost(shoppingCart);
console.log("Total sum today:", sum);

//output : Total sum today: 30000