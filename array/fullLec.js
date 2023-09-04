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
