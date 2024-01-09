// Create a function that checks if a given string is a valid URL.

function isValidURL(url) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(url);
  }
  console.log(isValidURL("https://www.example.com"));              // true
  console.log(isValidURL("ftp://ftp.example.com/file.txt"));       // true
  console.log(isValidURL("invalid-url"));                          // false
  console.log(isValidURL("http://example.com/path with spaces"));  // false