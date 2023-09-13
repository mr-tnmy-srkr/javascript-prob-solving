//1. Rotate the array of "n" elements in anticlockwise "x" times by js
//2. Rotate the array of "n" elements in clockwise "x" times by js

// ................................................................................

// 1. Rotate the array of "n" elements in anticlockwise "x" times by js


function rotateArrayAntiClockwise(arr, x) {
    const n = arr.length;
    
    // Ensure x is within the range [0, n]
    x = x % n;
    
    // Slice the array into two parts and swap them
    const rotatedPart = arr.slice(0, x);
    const remainingPart = arr.slice(x);
    const rotatedArray = remainingPart.concat(rotatedPart);
    
    return rotatedArray;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const rotations = 2; // Rotate twice anticlockwise
  const rotatedResult = rotateArrayAntiClockwise(originalArray, rotations);
  
  console.log(rotatedResult); // Output: [3, 4, 5, 1, 2]
  
// ................................................................................
// ................................................................................


//   2. Rotate the array of "n" elements in clockwise "x" times by js

function rotateArrayClockwise(arr, x) {
    const n = arr.length;
    
    // Ensure x is within the range [0, n)
    x = x % n;
    
    // Slice the array into two parts and concatenate them in reverse order
    const rotatedPart = arr.slice(0, n - x);
    const remainingPart = arr.slice(n - x);
    
    return remainingPart.concat(rotatedPart);
  }
  
  // Example usage:
  const originalArr = [1, 2, 3, 4, 5];
  const rotation = 2;
  
  const rotatedArray = rotateArrayClockwise(originalArr, rotation);
  console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
  