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

const inputObject = { name: 'John', country: 'USA' };
const countryValue = getCountryValue(inputObject);
console.log(countryValue); 