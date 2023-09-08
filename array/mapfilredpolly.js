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
