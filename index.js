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
  our space complexity will be o(n2) quadratic cause we create another auxiliary array

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
  my solution relies on two key variables to work
  its first deduct the current element in the iteration from target,
  it then slices the array in away that it returns all the other elemnts that are ahead
  uses include to check if the results are in that array.
  includes has a big o of O(n) and since we run it once for each nth element, my big 0 should be n * o(n ) = o(n2)
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
