//  How will you verify a word as palindrome?

// hints: if you reverse a word and it becomes same as the previous word, it is called palindrome.

function isPalindrome(str){
    var i, len = str.length;
    for(i =0; i<len/2; i++){
      if (str[i]!== str[len -1 -i])
         return false;
    }
    return true;
  }

  console.log(isPalindrome('madam'))  // true

  console.log(isPalindrome('toyota'))  //false

//   or


function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}

console.log(checkPalindrome('madam'));  // true
console.log(checkPalindrome('toyota'));  // false