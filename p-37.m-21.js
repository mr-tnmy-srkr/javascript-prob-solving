// word reverse

// ----------------------------------------------------------------

function reverseWords(str) {
  const words = str.split(" ");
  const result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }
const reversed = result.join(" ")
return reversed;
}
const myString = "I am a good boy";
const reversed = reverseWords(myString);
console.log(reversed);

// output : boy good a am I
