
//task #1
//define arrow fuction called greet

const greet=(name: string) =>{
    return `Hello ,${name}!`;
}
console.log(greet("jhon"));

//answer Hello,jhon!

//task #2
//define arrow function calculateArea

const calculateArea=(length: number,width:number) =>{
    return length * width
}
const length:number=5;
const width:number=3;
const area:number=calculateArea(length,width);
console.log(area);
//answer=15

//task #3
//default parameter arrow function

const greeting=(name:string,greet:string='Hello'):string =>{
    return`${greeting},${name}`;
}
console.log(greeting("john","goodmorning"));
console.log(greeting("jane"));

//task #4

// Define an arrow function named friend with a rest parameter
const friend = (...names: string[]): string[] => {
    return names;
}

// Example usage:
console.log(friend('uzma', 'jamshed', 'khan')); // Output: ['uzma', 'jamshed', 'khan']


//task #5

// Define the friend function using the spread operator
const friend1 = (...names: string[]): string[] => {
    // Return all names in an array
    return [...names];
};

// Example usage
const namesArray: string[] = friend1('uzma', 'malahim', 'khan');

// Create a copy of the original array and pop the last name
const copiedNamesArray: string[] = [...namesArray];
copiedNamesArray.pop();

console.log(namesArray); // Original array remains unchanged
console.log(copiedNamesArray); // Array with last name popped
