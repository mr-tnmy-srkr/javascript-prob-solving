console.log(1);
console.log(2);
setTimeout(() => {
    console.log('lazy logged')
},4000);
doSomething();
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3)
}

/* output

1
2
3
4
5
6
lazy logged */