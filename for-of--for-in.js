const numbers = [1, 4, 5, 7, 8];
for (const num of numbers) {
  // console.log(num)    //numbers array
}
/* 1
    4
    5
    7
    8 */
// ................................
for (const num in numbers) {
  //   console.log(num)  // index
}
/*  0
    1
    2
    3
    4 */
// ..........................................
const nobab = "siraj ud doulla";
for (const char of nobab) {
  //  console.log(char) // all character
}

// ................................................
// ................................................

const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};
/* for(const key of glass){
     console.log(key)  TypeError: glass is not iterable
} */
// ..........................................
for (const key in glass) {
  // console.log(key);       //    name
  //     color
  //     price
  //     isCleaned
  // const value = glass.key;  //undefined
  // console.log(value)

  const value = glass[key];
  // console.log(value);        //  glass
  //  golden
  //  12
  //  true
}
// jehetu 34 no line e for of use kora gelo na obj er upor e tai

const keys = Object.keys(glass);
// console.log(keys)  // array pabo -->  [ 'name', 'color', 'price', 'isCleaned' ]

for (const key of keys) {
//   console.log(key);    //   name
                        //   color
                        //   price
                        //   isClean
    const value = glass[key];
    console.log(key,value)    //   name glass
                              //   color golden
                              //   price 12
                              //   isCleaned true
}
