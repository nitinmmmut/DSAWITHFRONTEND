//Map in javascript

const employees = [
  { name: "john", age: 32 },
  { name: "sarah", age: 28 },
  { name: "maichal", age: 40 },
];

//callback fn

// const employeesName = employees.map((employee) => employee.name);

//anonymous fn

const employeesName = employees.map(function (employee) {
  return employee.name;
});

console.log(employeesName); //[ 'john', 'sarah', 'maichal' ]

//pollyfill map( interview question)

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}

const myEmployeesName = employees.myMap((employee) => employee.name);
console.log(myEmployeesName); //[ 'john', 'sarah', 'maichal' ]

// Filter in javascript

const products = [
  { name: "iphone", price: 999, inStock: true },
  { name: "Samsung", price: 899, inStock: false },
  { name: "Google Pixel", price: 799, inStock: true },
];

// const availableProducts = products.filter((product) => product.inStock);

const availableProducts = products.filter(function (product) {
  return product.inStock === true;
});

console.log(availableProducts); //[{ name: 'iphone', price: 999, inStock: true },{ name: 'Google Pixel', price: 799, inStock: true }]

// polyfill of filter
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = (callback) => {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const myAvailableProducts = products.myFilter((product) => product.inStock);

console.log(availableProducts); //o/p:
// [
//   { name: 'iphone', price: 999, inStock: true },
//   { name: 'Google Pixel', price: 799, inStock: true }
// ]

// Reduce in Javascript;

const orders = [
  { product: "iPhone", price: 999, quantity: 2 },
  { product: "Samsung", price: 899, quantity: 1 },
  { product: "iPhone", price: 799, quantity: 3 },
];

const totalAmount = orders.reduce(function (accumulator, order) {
  return accumulator + order.price * order.quantity;
}, 0);

console.log(totalAmount); //5294

//pollyfill of reduce()

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = (callback, initialValue) => {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
}

const myTotalAmount = orders.myReduce(function (accumulator, order) {
  return accumulator + order.price * order.quantity;
}, 0);

console.log(totalAmount); // 5294

// Question 1: Find the longest word length

const words = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];

const longestWordLength = words.reduce((maxLength, word) => {
  const currentLength = word.length;
  return currentLength > maxLength ? currentLength : maxLength;
}, 0);

console.log(longestWordLength); //11

//queston:2 find the longest word

const longestWord = words.reduce((longestWord, word) => {
  return word.length > longestWord.length ? word : longestWord;
}, "");

console.log(longestWord); // dragonfruit
