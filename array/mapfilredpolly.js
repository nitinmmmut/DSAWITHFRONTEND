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
