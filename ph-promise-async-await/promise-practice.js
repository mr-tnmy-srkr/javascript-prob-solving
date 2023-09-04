const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    resolve(566665);
  } else {
    reject("No data available");
  }
});

getData
  .then((data) => console.log(data + 35))
  .catch((err) => console.log("ERR :", err));

 /*  random two output :
  
  6.865931089041812
  ERR : No data available

0.038154710138771364
566700 */
