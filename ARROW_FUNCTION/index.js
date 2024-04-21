"use strict";
//task #1
//define arrow fuction called greet
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (name) => {
    return `Hello ,${name}!`;
};
console.log(greet("jhon"));
//answer Hello,jhon!
//task #2
//define arrow function calculateArea
const calculateArea = (length, width) => {
    return length * width;
};
const length = 5;
const width = 3;
const area = calculateArea(length, width);
console.log(area);
//answer=15
//task #3
//default parameter arrow function
const greeting = (name, greet = 'Hello') => {
    return `${greeting},${name}`;
};
console.log(greeting("john", "goodmorning"));
console.log(greeting("jane"));
//task #4
// Define an arrow function named friend with a rest parameter
const friend = (...names) => {
    return names;
};
// Example usage:
console.log(friend('uzma', 'jamshed', 'khan')); // Output: ['uzma', 'jamshed', 'khan']
//task #5
// Define the friend function using the spread operator
const friend1 = (...names) => {
    // Return all names in an array
    return [...names];
};
// Example usage
const namesArray = friend1('uzma', 'malahim', 'khan');
// Create a copy of the original array and pop the last name
const copiedNamesArray = [...namesArray];
copiedNamesArray.pop();
console.log(namesArray); // Original array remains unchanged
console.log(copiedNamesArray); // Array with last name popped
