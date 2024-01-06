// How can you match substring of a sting?

function subStringFinder(str, subStr) {
  var idx = 0,
    i = 0,
    j = 0,
    len = str.length,
    subLen = subStr.length;

  for (; i < len; i++) {
    if (str[i] == subStr[j]) j++;
    else j = 0;

    //check starting point or a match
    if (j == 0) idx = i;
    else if (j == subLen) return idx;
  }

  return -1;
}

console.log(subStringFinder("abbcdabbbbbck", "ab"));     //0
console.log(subStringFinder("abbcdabbbbbck", "bck"));    //9

//doesn't work for this one.
console.log(subStringFinder("abbcdabbbbbck", "bbbck"));  //-1
