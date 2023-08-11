/*  John is a web developer, and he cycles to work. 
 He knows the distance between his house and his office in miles.
 John wants to measure the distance in kilometers. 
 Calculate the distance in km.

To convert miles to km:km = miles* 1.60934

Input:
The input line has the distance in miles.
 
Output:
Print the distance in km. */

// ---------------------------------------------------------------------

function milesToKm(miles){
    const km = miles * 1.60934;
    return km;
}
const distanceInKm = milesToKm(10);
console.log(distanceInKm, " km");