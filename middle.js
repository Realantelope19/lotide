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
 


const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
}
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])

const middle = function (array){
  let index =  Math.floor( array.length / 2);
if (array.length <= 2){
  // Run this if the numbers are less than or equals to 2
  return []
} else if(array.length %2 === 0){
// Run this if the numbers are even
return [array[index - 1],array[index]]
}else if (array.length %2 !== 0){
  // Run this if the numbers is odd
  return (array[index]);
}
}


console.log(middle([1,2,3,7,8]))
console.log(middle([4,5,]))
console.log(middle([1, 2, 3, 4, 5, 6]))