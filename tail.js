const  {Module} = require("module");

//const assertEqual = function(actual, expected) {
  //if (actual === expected) {
    //console.log(` ✅✅✅Assertion Passed:   ${actual} === ${expected}`);
  //} else if (actual !== expected) {
    //console.log(` 🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  //}
//};
const assertEqual = require('./assertEqual');
const tail = function(arr) {
  return arr.slice(1);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;