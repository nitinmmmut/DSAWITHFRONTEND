//2. Write a JavaScript program to print the current window contents.

// <---Html--->
// {/* <p>click the button to print the current page</p>; */}
// {/* <button onclick="print_current_page"></button>; */}

// function print_current_page() {
//   window.print();
// }

// 3.Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy
//  or dd-mm-yyyy, dd/mm/yyyy

let today = new Date();

let dd = today.getDate();

let mm = today.getMonth() + 1;

const yyyy = today.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}

if (mm < 10) {
  mm = `0${mm}`;
}

today = `${mm}-${dd}-${yyyy}`;

console.log(today);

today = `${dd}/${mm}/${yyyy}`;

console.log(today);
