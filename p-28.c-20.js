// create a full sentence from an object

// -----------------------------------------------------------

function info(obj) {
  if(Array.isArray(obj)){
    return "This is array please provide me a valid object"
  }else{
  if (typeof obj !== "object") {
    return "please provide me a valid object";
  } else {
    const sentence = `My name is ${obj.name},age ${obj.age},address:${obj.address}`;
    return sentence;
  }
}
}

const myInfo = {
    name : "John",
    age : 30,
    address : "usa",
};
// const myInfo = [1,2]
// const myInfo = "5";

console.log(typeof myInfo);
console.log(info(myInfo));

// output: My name is John,age 30,address:usa
