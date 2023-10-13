//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function remove_char(str, char_pos) {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}

console.log(remove_char("python", 0));
console.log(remove_char("python", 3));
console.log(remove_char("python", 5));
