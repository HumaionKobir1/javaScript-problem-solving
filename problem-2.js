// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

function extractFirstThreeElements(a) {
    var resultArray = a.slice(0, 3);
    return resultArray;
  }
  
  // Example usage:
  var inputArray = [1, 2, 3, 4, 5, 6];
  var result = extractFirstThreeElements(inputArray);
  console.log(result); 

