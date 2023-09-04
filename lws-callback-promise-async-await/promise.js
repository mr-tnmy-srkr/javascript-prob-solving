const status = true;
console.log("Task 1");

// promise definition
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve("task 2");
    } else {
      reject("failed");
    }
  }, 2000);
});

// promise call
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

  console.log('Task 3')


//   output
/* 
Task 1
Task 3
task 2 */