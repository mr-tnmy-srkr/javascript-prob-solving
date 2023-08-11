// find vowels,consonants & spaces in a sentence and put them into an object

// ____________________________________________________________________

 function findAlphabet(letter) {
  if (typeof letter !== "string") {
    return "please enter a valid string";
  }
  let vowel = 0;
  let consonant = 0;
  let space = 0;
  let vowelArr = [];
  let consonantArr = [];
  let spaceArr = [];
for(let i=0; i<letter.length; i++){
    let char = letter[i].toLowerCase();
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        vowel++;
        vowelArr.push(char);
    }
    else if(char !== " "){
        consonant++;
        consonantArr.push(char);
    }
    else{
        space++;
        spaceArr.push(char);
    }
}
const obj ={
    vowelCount: vowel,
    consonantCount:consonant,
    spaceCount:space,
    vowelArray: vowelArr,
    consonantArray: consonantArr,
    spaceArray: spaceArr,
}
return obj;
}


const sentence = "The name of our country is India";
console.log(findAlphabet(sentence));

/* output :
{
    vowelCount: 12,
    consonantCount: 14,
    spaceCount: 6,
    vowelArray: [
      'e', 'a', 'e', 'o',
      'o', 'u', 'o', 'u',
      'i', 'i', 'i', 'a'
    ],
    consonantArray: [
      't', 'h', 'n', 'm',
      'f', 'r', 'c', 'n',
      't', 'r', 'y', 's',
      'n', 'd'
    ],
    spaceArray: [ ' ', ' ', ' ', ' ', ' ', ' ' ]
  }
   */