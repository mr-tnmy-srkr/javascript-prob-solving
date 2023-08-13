// matched products from an objects inside an array

// ---------------------------------------------------------------

const products = [
  {
    id: 1,
    name: "samsung mobile",
    price: 19000,
  },
  {
    id: 2,
    name: "hp laptop",
    price: 49000,
  },
  {
    id: 3,
    name: "vivo mobile",
    price: 15000,
  },
  {
    id: 4,
    name: "dell laptop",
    price: 51000,
  },
  {
    id: 5,
    name: "oppo mobile",
    price: 25000,
  },
];

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search)) {
      matched.push(product);
    }
  }
  return matched;
}
const result1 = matchedProducts(products, "mobile");
console.log(result1);

/* output :
[
    { id: 1, name: 'samsung mobile', price: 19000 },
    { id: 3, name: 'vivo mobile', price: 15000 },
    { id: 5, name: 'oppo mobile', price: 25000 }
  ] */

const result2 = matchedProducts(products, "laptop");
console.log(result2);

/* output :
[
    { id: 2, name: 'hp laptop', price: 49000 },
    { id: 4, name: 'dell laptop', price: 51000 }
  ] */
