/* Write a function findLeapYear() that will take 
the array [2023, 2024, 2025, 2028, 2030] as the input parameter 
and will check if each year is a leap year. 
If a year is a leap year insert that year in a new array, 
return the new array and print the result */

// -----------------------------------------------------------------

function findLeapYear(arr){
for(let i=0;i<arr.length; i++){
 let getYear = arr[i]
    if(getYear % 400 === 0 || (getYear % 4 === 0 && getYear % 100 !== 0)){
        return "leap year";
    }
    else{
        return "non leap tear";
    }
}

}
const years =  [2023, 2024, 2025, 2028, 2030];
const isLeapYear = findLeapYear(years);
console.log(isLeapYear);