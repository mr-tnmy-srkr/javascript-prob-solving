// number array in ascending order

//  -------------------------------------------------------------------------------

const numbers1 = [ 2, 45, 10, 15, 20, 25, 30, 35, 40, 5, -50 ];
const numbers2 = [ 1 ];

function secondLargest(numbs){
    if(numbs.length < 2){
return "Array should have at least two elements";
    }
numbs.sort(function(a,b){
return a-b;
})
return numbs;
}
console.log(secondLargest(numbers1));
console.log(secondLargest(numbers2));

/* output : 
[
  -50,  2,  5, 10, 15,
   20, 25, 30, 35, 40,
   45
]
Array should have at least two elements */