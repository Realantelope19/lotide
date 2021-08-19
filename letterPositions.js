const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    let letter = sentence[i]; 
    
    if(results[letter]){
      results[letter].push(i);
      
    } else {
      results[letter]= new Array()
      results[letter].push(i)
     
    }
  } 
  return results;
};

//const countLetters = function (word) {
  //let results = {};
  //for (const letter of word) {
    //if (results[letter]) {
      //results[letter] += 1
    //} else {
      //results[letter] = 1;
    //}
  //}
  //return(results)
//};
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

