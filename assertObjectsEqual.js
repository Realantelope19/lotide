const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅Assertion Passed:   ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  }
};
var eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  }
 for(var i = 0; i <= array1.length; i++) {
   if(array1[i] !== array2[i]) {
    return false;
   }
  }
  return true;
 };
 
const eqObjects = function(object1, object2) {
  //console.log(Object.keys(object1))
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  if (obj1.length === obj2.length){
 for(let key of obj1){
   if(object1[key] !== object2[key]){
     if(Array.isArray(object1) && Array.isArray(object2)){
       return eqArrays(object1[key],object2[key] )
     }


     return false;
   } else{
     return false;
   }
 }

  }else {
    return false
  }

};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (eqObjects(actual, expected)) {
    console.log(` ✅✅✅Assertion Passed:   ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  }

};

assertObjectsEqual({a:"1", b: "2"}, {b: "6", a: "1"});