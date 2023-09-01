//JavaScript: Find the area of a triangle where lengths of the three of its sides are 5, 6, 7

const s1 = 5;
const s2 = 6;
const s3 = 7;

//cal perimeter

const s = (s1 + s2 + s3) / 2;

const area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));

console.log(area);
