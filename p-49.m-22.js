/* if ticket no is less than 100 , per ticket price : Rs.100,

if ticket no is more than 100 but less than 200
 first 100 tickets will be Rs.100/ticket, rest will be Rs.90 

 if you purchase more than 200 tickets
 first 100 --> Rs.100/-
 101-200 --> Rs.90/-
 200+ --> Rs.70/-
 */

// ---------------------------------------------------------------------------------

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQty = ticketQuantity - 100;
    const restTicketPrice = restTicketQty * second100Rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQty = ticketQuantity - 200;
    const restTicketPrice = restTicketQty * restTicketRate;
    const totalPrice = first100Price + second100Price + restTicketPrice;
    return totalPrice;
  }
}
const tktqty1 = 90;
const tktqty2 = 100;
const tktqty3 = 110;
const tktqty4 = 200;
const tktqty5 = 210;
const price1 = ticketPrice(tktqty1);
const price2 = ticketPrice(tktqty2);
const price3 = ticketPrice(tktqty3);
const price4 = ticketPrice(tktqty4);
const price5 = ticketPrice(tktqty5);
console.log(tktqty1 + " ticket's price is Rs.", price1);
console.log(tktqty2 + " ticket's price is Rs.", price2);
console.log(tktqty3 + " ticket's price is Rs.", price3);
console.log(tktqty4 + " ticket's price is Rs.", price4);
console.log(tktqty5 + " ticket's price is Rs.", price5);

/* output :
90 ticket's price is Rs. 9000
100 ticket's price is Rs. 10000
110 ticket's price is Rs. 10900
200 ticket's price is Rs. 19000
210 ticket's price is Rs. 19700 */