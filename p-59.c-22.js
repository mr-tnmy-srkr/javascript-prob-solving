/* Problem 5: Convert your gems into diamond:
You will be given a function called gemsToDiamond().
 It will take three numbers (the number of gems of your 3 friends) as input.
Power of gems per 1st friend = 21
Power of gems per 2nd friend = 32
Power of gems per 3rd friend = 43
[Gems capacity means how many diamonds a gem can be converted into. ]
Now your task: you have to figure out how many diamonds you will 
get in total by combining the gems of all your friends. If the number
 of total diamond is over 1000, then you will get as many diamonds as 
 are left after subtracting 2000 from the total diamond.

Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303
 */
// --------------------------------------------------------------------------------

function gemsToDiamond(x,y,z){
    if(typeof x !== "number" || typeof y !== "number" || typeof z !== "number"){
        return "please provide me valid number input"
    }else if(x < 0 || y < 0 || z < 0){
        return "please provide me all positive numbers"
    }else if(x%1 !== 0 || y%1 !== 0 || z%1 !== 0){
        return "please provide me all integer number"
    }
    else{
        const friend1 = 21;
        const friend2 = 32;
        const friend3 = 43;
        const total = (x * friend1) + (y * friend2) + (z * friend3);

        if(total > 2000){
            return total - 2000;
        }else{
            return total;
        }
    }
}
console.log(gemsToDiamond(100, 5, 1)) //303
console.log(gemsToDiamond(20, 200, 50)) //6970
console.log(gemsToDiamond(1, 1, 1)) //96