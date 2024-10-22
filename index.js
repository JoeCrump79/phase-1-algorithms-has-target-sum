function hasTargetSum(array, target) {
  let result = false; //stores the result of whether there is a pair of numbers adding up to target
  const n = array.length
  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j <= n - 1; j++) {
      // console.log(`${i} ${j}`)
      if (i !== j && (array[i] + array[j] === target)) {
        result = true
      }
    }
  }
  return result
}


/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Psuedocode 
  
  declare a boolean value 'result' as false
  declare n <- length of array
  create an outer loop to go through the array index from 0 to n-1 in i 
      create an inner loorp to go through the array index from 0 to n-1 in j
        if i is not equal to j and element at i at j adds up to target, then
            assign true to result
  return the value of the result 
 
 
 
  

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
