// Write a function to find the shortest word in a sentence.
function shortestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((shortest, current) => (current.length < shortest.length ? current : shortest), words[0]);
  }

  console.log(shortestWord("A quick brown fox jumped over the lazy dog")); // A