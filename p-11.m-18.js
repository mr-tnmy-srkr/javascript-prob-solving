/* write the prices of the book that you have.
display the price if the prices is lower than 200. */

const myBookPrice = [100,120,150,180,199,200,201,205];
var i = 0;
while(i<myBookPrice.length){
    var eachBookPrice = myBookPrice[i];
   if(eachBookPrice>=200){
        break;
    }
    console.log(eachBookPrice);
    i++;
}
// .........................................................
// or

const bookPrices = [150, 180, 210, 190, 220, 175];
let x = 0;

while (x < bookPrices.length) {
  if (bookPrices[x] < 200) {
    console.log("Book price:", bookPrices[x]);
  }
  x++;
}
// ..........................................................
// or

const OurBookPrices = [150, 180, 210, 190, 220, 175];
let y = 0;
for( ; y<OurBookPrices.length; y++){
    if(OurBookPrices[y] > 200){
        continue;
    }
    console.log(OurBookPrices[y]);
}