/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.


*/

let removeEWords = function (sentence) {
  let noEwords = [];
  let arrSent = sentence.split(" ");
  arrSent.filter((word) => {
    if (!word.includes("e")) {
      noEwords.push(word);
    }
  });
  return noEwords.join(" ");
};

Examples:
console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
