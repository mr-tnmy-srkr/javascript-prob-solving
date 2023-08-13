// call arguments inside a function (array like objects)

// ----------------------------------------------------------------

function add(x,y){
console.log(x,y);   //  12,13
 console.log(arguments); //[Arguments] { '0': 12, '1': 13, '2': 45, '3': 89, '4': 78 }
//  it is a array like objects
console.log(arguments[3]);  // 89
}

add(12,13,45,89,78);