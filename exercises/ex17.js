/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/
let laughter = "";

function laugh(times) {
  if (!times) {
    return "";
  } else {
    for (let i = 1; i <= times; i++) {
      laughter += "ha";
    }
    return `${laughter}!`;
  }
}

console.log(laugh(0));