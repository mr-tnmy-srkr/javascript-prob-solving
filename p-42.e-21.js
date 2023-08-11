// number array in descending order

//  -------------------------------------------------------------------------------

const numbers1 = [ 2, 45, 10, 15, 20, 25, 30, 35, 40, 5, -50 ];
const numbers2 = [ 1 ];

function secondLargest(numbs){
    if(numbs.length < 2){
return "Array should have at least two elements";
    }
numbs.sort(function(a,b){
return b-a;
})
return numbs;
}
console.log(secondLargest(numbers1));
console.log(secondLargest(numbers2));

/* output : 
[
   45, 40, 35, 30, 25,
   20, 15, 10,  5,  2,
  -50
]
Array should have at least two elements */