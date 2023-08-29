//JavaScript Program to Calculate the Area of a Triangle
//Example 1: Area When Base and Height is Known
//area=(base*height)/2

// const baseValue = 8;
// const heightvalue = 6;

// //cal the area
// const areaValue = (baseValue * heightvalue) / 2;

// console.log(`The area of triangle: ${areaValue}`);

//Example 2: Area When All Sides are Known
const s1 = 3;
const s2 = 4;
const s3 = 5;

// cal semi-perimeter
const s = (s1 + s2 + s3) / 2;

const areaValue = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));

console.log(`The area of triangle is: ${areaValue}`);
