/* Write a function findLeapYear() that will take 
the array [2023, 2024, 2025, 2028, 2030] as the input parameter 
and will check if each year is a leap year. 
If a year is a leap year insert that year in a new array, 
return the new array and print the result */

// -----------------------------------------------------------------

function findLeapYear(arr) {
  const leapYear = [];
  const nonLeapYear = [];
  for (let i = 0; i < arr.length; i++) {
    let year = arr[i];
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      leapYear.push(year);
    } else {
      nonLeapYear.push(year);
    }
  }
  const obj = { Leap_Year: leapYear, Non_Leap_Year: nonLeapYear };
  return obj;
}
const years = [2000,2023, 2024, 2025, 2028, 2030,1600,1700];
const isLeapYear = findLeapYear(years);
console.log(isLeapYear);
