// fizz,buzz,fizzbuzz problem

/* show the output from 1-60;
if the number is divisible by 3 then instead of number show 'fizz'
if the number is divisible by 5 then instead of number show 'buzz'
if the number is divisible by 3 and 5 then instead of number show 'fizzbuzz' */

// ---------------------------------------------------------------------------------

for(let i = 1; i<=60; i++){
    if(i % 3 === 0 && i % 5 === 0){
console.log("fizzbuzz");
    }else if(i % 3 === 0){
        console.log("fizz");
    }
    else if(i % 5 === 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}

/* output : 
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
17
fizz
19
buzz
fizz
22
23
fizz
buzz
26
fizz
28
29
fizzbuzz
31
32
fizz
34
buzz
fizz
37
38
fizz
buzz
41
fizz
43
44
fizzbuzz
46
47
fizz
49
buzz
fizz
52
53
fizz
buzz
56
fizz
58
59
fizzbuzz */