const assertEqual = function(actual, expected) {
if (actual === expected) {
console.log(` ✅✅✅Assertion Passed:   ${actual} === ${expected}`);
} else if (actual !== expected) {
 console.log(` 🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
}
};



const countLetters = function (word) {
  let results = {};
  for (const letter of word) {
    if (results[letter]) {
      results[letter] += 1
    } else {
      results[letter] = 1;
    }
  }
  return(results)
};
console.log(countLetters("Appplle"));
