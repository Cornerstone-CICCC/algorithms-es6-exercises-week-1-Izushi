/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/
let laughter = "";

function emotions(emotion, callback) {
  console.log(`I am ${emotion}, ${callback}`);
}

emotions("happy", (function(times) {
  if (!times) {
    return "";
  } else {
    for (let i = 1; i <= times; i++) {
      laughter += "ha";
    }
  }
    return `${laughter}!`;
  })(10));