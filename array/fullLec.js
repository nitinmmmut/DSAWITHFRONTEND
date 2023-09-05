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
