const paymentSuccess = true;
const marks = 80;

function enroll() {
  console.log("course enrollment is in progress...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("payment failed");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("course on progress...");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("you could not get enough marks to get the certificate");
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log("preparing your certificate");
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("congrats! you got the certificate");
    }, 1000);
  });
  return promise;
}

// promise call

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
 .catch(function(err){
    console.log(err)
})


//  output

/* 
if paymentSuccess = true;
const marks = 80;

course enrollment is in progress...
course on progress...
preparing your certificate
congrats! you got the certificate */

/*
 if paymentSuccess = false;
const marks = 80;

course enrollment is in progress...
payment failed
*/

/* 
if paymentSuccess = true;
const marks = 70;

course enrollment is in progress...
course on progress...
you could not get enough marks to get the certificate
*/

/* 
if paymentSuccess = false;
const marks = 70;

course enrollment is in progress...
payment failed
*/