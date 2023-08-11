// find the smallest number from an array

// ------------------------------------------------------

function findSmallest(x) {
    if (!Array.isArray(x)) {
      return "please provide me an valid array";
    } else {
      let smallest = x[0];
      for (let items of x) {
     if(typeof items !== "number"){
      return "please provide me an valid number array"
     }else{
      if (items < smallest) {
          smallest = items;
        }
     }
      }
      return smallest;
    }
  }
  
  const arr = [5, 12, 7, 9, 20, 4, 2, 3];
  console.log(findSmallest(arr));
  
  output : 2