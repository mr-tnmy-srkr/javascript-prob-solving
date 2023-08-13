/* You will be given a function called mindGame
("which will take a positive number as input.")

Now your task: You have to multiply that number by 3, 
then add 10, then divide by 2, then subtract 5, and return the output.

Sample Input & Output
Input: 5
Output: 7.5 */

//   ---------------------------------------------------------------------------------


function mindGame(x){
    if(typeof x !== "number"){
        return "please provide a number";
    }else if(x <= 0){
        return "please provide a positive number"
    }else{
        const result = (((x*3)+10)/2)-5
        return result;
    }
   /*  if(typeof x !== "number" || x <= 0){
         return "please provide me a positive number"
    }else{
        const result = (((x*3)+10)/2)-5
        return result;
    } */

}
console.log(mindGame(-5)); //please provide a positive number
console.log(mindGame(5)); //7.5