/* const getData = new Promise ((resolve, reject) => {
resolve("i am resolved");
resolve(44);
}) */

// console.log(getData)   //  Promise { 'i am resolved' }
// console.log(getData + 56)   // [object Promise]56

// getData.then(data => console.log(data + 22));  // 66

// .............................................................................

/* const getData = new Promise((resolve, reject) => {
  reject("no data available");
}); */

// console.log(getData)  // error

/* getData
  .then((data) => console.log(data + 22))
  .catch((err) => console.log("ERR :", err)); */ // ERR : no data available
