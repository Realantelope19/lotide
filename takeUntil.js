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

const takeUntil = function(array, callback) {
 const randomArray = [];
 for(item of array){
   //console.log(item)
   //console.log(callback(item))
   if(callback(item)=== true){
    return randomArray
   }else{
     randomArray.push(item)
 
   }
  
 }

 return randomArray
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2);