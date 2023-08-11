// string reverse

// ------------------------------------------------------------

function reverseString(text){
    let reversed = "";
    for(let i=text.length-1; i>=0 ;i--){
        reversed += text[i];
    }
    return reversed;
}

const myString = "I am a good boy";
const reversed = reverseString(myString);
console.log('reversed output : ' ,reversed)

// output : yob doog a ma I