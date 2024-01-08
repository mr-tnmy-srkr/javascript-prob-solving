// Create a function to determine if a given string is a valid email address.

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log(isValidEmail("abcd@gmail.com")); // true
console.log(isValidEmail("abc@.m"));         // false
