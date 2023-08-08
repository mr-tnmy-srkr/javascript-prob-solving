/* Write a function that will take hour as the input parameter and 
will convert it into minutes and will return the result in minutes. */

// ----------------------------------------------------------------------------

function getHour(hour){
    const getMinute = hour * 60;
    return getMinute;
}
const hr = 5;
const min = getHour(hr);
console.log(hr + " hours = "+min+" minutes");

// output : 5 hours = 300 minutes
