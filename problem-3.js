
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Hint: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
function hasProperty(obj, key) {
    return key in obj;
  }
  
  // Example usage:
  var obj1 = { a: 1, b: 2, c: 3 };
  console.log(hasProperty(obj1, 'b')); 
  
  var obj2 = { x: 'apple', y: 'banana', z: undefined };
  console.log(hasProperty(obj2, 'z')); 

  var obj3 = { p: null, q: 0, r: false };
  console.log(hasProperty(obj3, 's'));


