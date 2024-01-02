// Count Total number of zeros from 1 upto n?

//If n = 50. number of 0 would be 11 (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100). Please note that 100 has two 0

function countZero(n){
    var count = 0;
    while(n>0){
     count += Math.floor(n/10);
     n = n/10;
    }
    return count;
  }

  console.log(countZero(2014));   //223