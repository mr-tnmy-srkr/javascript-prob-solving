const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
  console.log("course enrollment is in progress...");
  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("payment failed");
    }
  }, 2000);
}

function progress(callback) {
  console.log("course on progress...");
  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("you could not get enough marks to get the certificate");
    }
  }, 3000);
}

function getCertificate() {
  console.log("preparing your certificate");
  setTimeout(function () {
    console.log("congrats! you got the certificate");
  }, 1000);
}


enroll(function(){
    progress(getCertificate);
});

// output

/* if marks = 70;

course enrollment is in progress...
course on progress...
you could not get enough marks to get the certificate */


/* if marks = 80;

course enrollment is in progress...
course on progress...
preparing your certificate
congrats! you got the certificate */