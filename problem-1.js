// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function getCountryValue(inputObject) {
    if (inputObject && typeof inputObject === 'object') {
        if ('country' in inputObject) {
            return inputObject.country;
        } else {
            return 'Country key not found';
        }
    } else {
        return 'Invalid input object';
    }
}

// Example usage:
const inputObject = { name: 'John', country: 'USA' };
const countryValue = getCountryValue(inputObject);
console.log(countryValue); // Output: USA





// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array






// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Hint: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists




// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result



// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string





// Write a function that takes a value as argument
// Return the type of the value





