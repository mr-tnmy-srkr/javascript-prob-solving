/* The function should be named isJavaScriptFile ().
 This function will take a string as a parameter which
  will be a file name (eg 'index.js'). 
  You should return true if it is a javascript file and false if not */

//   ---------------------------------------------------------------------------------

function isJavaScriptFile(filename) {
  if (typeof filename !== "string") {
    return "please provide me a valid name (string)";
  } else {
 
    // expand-->
    /* if (filename.toLowerCase().endsWith(".js")) {
      return true;
    } else {
      return false;
    } */

    // optimize-->
    return filename.toLowerCase().endsWith(".js"); //   true || false
  }
}
console.log(isJavaScriptFile("index.js")); //true
console.log(isJavaScriptFile("index.py")); //false
console.log(isJavaScriptFile(324)); // please provide me a valid name (string)

/* ---------------------------------------------------------------------------------
                                        or
--------------------------------------------------------------------------------- */

function isJsFile(InputFileName) {
  if (typeof InputFileName !== "string") {
    return "please provide me a valid name (string)";
  } else {
    const arr = InputFileName.split(".");
    const lastElement = arr.pop();
    
    // expand-->
   /*  if(lastElement.toLowerCase() === "js"){
      return true;
    }else{
      return false;
    } */

    // short hand-->
    return lastElement.toLowerCase() === "js"; //   true || false
    }
  }

  console.log(isJsFile("index.js")); //true
  console.log(isJsFile("index.py")); //false
  console.log(isJsFile(324)); // please provide me a valid names
