// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

// To find out which years between 2014 and 2050 have 1st January falling on a Sunday, we can use the following approach:

// Loop through each year between 2014 and 2050 and check if the 1st January of that year falls on a Sunday.
// To check if the 1st January of a year is a Sunday, we can use the Date object in JavaScript. Create a Date object for the 1st January of each year and use the getDay() method to get the day of the week. The getDay() method returns an integer between 0 and 6, where 0 represents Sunday, 1 represents Monday, and so on.
// If the day of the week is 0 (Sunday), we can print out the year.

console.log("...");
for (let year = 2014; year <= 2050; year++) {
  const date = new Date(year, 0, 1);
  if (date.getDay() === 0) console.log("1st Jan is being is a sunday" + year);
}
console.log("...");

//Output:
// 1st January is being a Sunday  2017
// 1st January is being a Sunday  2023
// 1st January is being a Sunday  2034
// 1st January is being a Sunday  2040
// 1st January is being a Sunday  2045
