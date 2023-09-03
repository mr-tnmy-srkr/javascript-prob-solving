// 3) Write an arrow function that will take 2 parameters:
//      One parameter will come from you and the other parameter
//      will be a default parameter.
//      Add these two parameters and return the result.

// ............................................................................

const add = (a,b=10) => {
return a+b;
};
const result1 = add(5);
console.log(result1);                    //15


const result2 = add(5,0);
console.log(result2);                    //5