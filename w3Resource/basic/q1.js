//Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.

// Current time is : 10 PM : 30 : 38

const today = new Date();
const day = today.getDay();
const dayList = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thrusday",
  "friday",
  "saturday",
];
console.log(`Today is : ${dayList[day]}.`);

let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

let prepand = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

if (hour === 0 && prepand === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}

console.log(`Current Time : ${hour} ${prepand} : ${minute} : ${second}`);
