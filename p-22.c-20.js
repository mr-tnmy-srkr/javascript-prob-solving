// Leap Year Check

// ..............................................................

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return " is a leap year";
  } else {
    return " is not a leap year";
  }
}
const year_1 = 1600;
const year_2 = 1700;
const myYearYear_1 = isLeapYear(year_1);
const myYearYear_2 = isLeapYear(year_2);
console.log(year_1  + myYearYear_1);
console.log(year_2  + myYearYear_2);
