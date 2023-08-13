// find total expense from the object

// ---------------------------------------------------------------------


const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600},
];
function totalCost(products){
    let expense = 0;
    /* for(let i = 0; i<products.length; i++){
    const product = products[i];
    expense = expense + product.price;
    } */
    for(let x in shoppingCart){
      expense = expense + shoppingCart[x].price;
    }
    return expense;
}
const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense)

//output : Total expense today: 7700