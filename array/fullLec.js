// How do you create an array in javascript?

const arr = [1, 2, 3, 4, "Hello", { name: "vishal" }, [1, 2, 3]];

// const arr2= new Array();

console.log(arr); //[1,2,3,4,'Hello',{name:'Vishal'},[1,2,3]]

//how do you access the first and last element of an array?

const firstElement = arr[0]; //1  //t.c.=O(1)
const arrLength = arr.length; //7
const lastElement = arr[arrLength - 1]; //[1,2,3]

console.log(firstElement, arrLength, lastElement);

//how do you remove the last element from an array?

const lastElement1 = arr.pop(); //[1,2,3]
console.log(lastElement1);

// how do you add an element to the end of the array
arr.push(5);
console.log(arr); //[ 1, 2, 3, 4, 'Hello', { name: 'vishal' }, 5 ]

// how do you add an element to the start of an array?

arr.unshift(0);
console.log(arr); //[ 0, 1, 2, 3, 4, 'Hello', { name: 'vishal' }, 5 ]

arr.shift();
console.log(arr); //[ 1, 2, 3, 4, 'Hello', { name: 'vishal' }, 5 ]

//how do you loop through an array in javascript?

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((x, i) => {
  console.log(x);
});

for (let x of arr) {
  console.log(x);
}

// Q1. How do u check if an element exists in an array?

const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }
  return false;
};

console.log(findElement(arr, "Hello")); //true

console.log(findElement(arr, "H")); //false

console.log(arr.includes("Hello")); //true
console.log(arr.includes("H")); //false

//Q2. how do u check index if an element exist in an array?

const findElementIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
console.log(findElementIndex(arr, "Hello")); //4
console.log(arr.indexOf("Hello")); //4
console.log(findElementIndex(arr, "He")); //-1
console.log(arr.indexOf("He")); //-1

// How to delete, add, and update element from specific index
console.log(arr); //[ 1, 2, 3, 4, 'Hello', { name: 'vishal' }, 5 ]
arr.splice(1, 3);
console.log(arr); //[ 1, 'Hello', { name: 'vishal' }, 5 ]

arr.splice(1, 0, 2, 3, 4, 5, 6);
console.log(arr); //[ 1, 2, 3, 4, 5, 6, 'Hello', { name: 'vishal' }, 5 ]

arr.splice(1, 3, 6, 7, 8);
console.log(arr); //[ 1, 6, 7, 8, 5, 6, 'Hello', { name: 'vishal' }, 5 ]

//splice vs slice

//slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.

const subArr = arr.slice(1, 4); //[start,end]
console.log(subArr); //[6,7,8]

//Shallow copy of array

const arrB = arr;
arrB.splice(1, 4);
console.log(arrB, arr); //[ 1, 6, 'Hello', { name: 'vishal' }, 5 ] [ 1, 6, 'Hello', { name: 'vishal' }, 5 ]

//Deep copy of the array
const arrC = [...arr];
const arrD = Array.from(arr);
const arrE = arr.concat();
arrC.splice(1, 4);
arrD.splice(1, 4);
arrE.splice(1, 3);
console.log(arrC, arrD, arrE, arr); //[ 1 ] [ 1 ] [ 1, 5 ] [ 1, 6, 'Hello', { name: 'vishal' }, 5 ]

// how to add two array in javascript?

const newArr = [...arr, ...arr];
const newArr2 = arr.concat(arrE);
console.log(newArr, newArr2);

//Q.3 How  can you check if two arrays are equal.

const isArrayEqual = (arr1, arr2) => {
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     return false;
  //   }
  // }
  // return true;
  return (
    arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
  );
};

console.log(isArrayEqual([1, 2, 3], [1, 2, 3])); // true
console.log(isArrayEqual([1, 2, 3], [1, 2, 4])); // false

//Q.4: How to sort an array in ascending and descendng order?
const x = [1, 4, 5, 0, -9, -5];
x.sort(); //O(NlogN)
console.log(x); //[ -5, -9, 0, 1, 4, 5 ]

x.sort((a, b) => b - a);
console.log(x); //[ 5, 4, 1, 0, -5, -9 ]

// Q.5:  How to reverse an array?
x.reverse();
console.log(x); //[ -9, -5, 0, 1, 4, 5 ]

// map , filter & reduce

const newMapArr = x.map((ele, i) => ele * ele);
console.log(newMapArr); //[ 81, 25, 0, 1, 16, 25 ]

const positiveNumbers = x.filter((ele, i) => ele > 0);
console.log(positiveNumbers); //[ 1, 4, 5 ]

const sumOfArr = positiveNumbers.reduce((acc, ele) => acc + ele, 0);
console.log(sumOfArr); //10

// Flat:[1,2,3,4,5,6,7,8,9]
const y = [1, 2, [4, 5, [6, 7]], 8, 9];
const flatedArray = y.flat(2);
console.log(flatedArray); //[1, 2, 4, 5,6, 7, 8, 9]

// filter vs find

const positiveNumber = x.find((ele, i) => ele > 0);
console.log(positiveNumber); //1
