function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let index = 0; index < array.length; index++){
    const results = target - array[index]
    const restItems = array.slice(index+1)
    if(restItems.includes(results)){
      return true
    }

  }
  return false
}

console.log(hasTargetSum([1, 2, 5], 4))
/* 
  Write the Big O time complexity of your function here
  our runtime will be quadratic

*/

/* 
  Add your pseudocode here
  iterate through the elements
  take an element and deduct from target save the results
  check if results exist in the rest of elements
  if it does return true, false otherwise 
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
