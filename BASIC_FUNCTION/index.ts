 
// task #1
//basic function

function greet(name: string): string {
    return `Hello, ${name}!`;
}

const greeting: string = greet("John");
console.log(greeting); 
// answer: Hello, John!

//task #2


{
function calculateArea(length: number, width: number): number {
    return  length * width;
}

const length: number =5;
const width: number = 3;
const area: number = calculateArea(length, width);

console.log("Area:", area); 
// Output: Area: 15
}

//task #3 greet function

{
    function greet(name:string,greeting:string="hello"):string{
        return`${greeting} ${name}`

    }
    console.log(greet("john" ,"Goodmorning"));
    // Good morning john
    console.log(greet("jane"));
    // hello jane
}

//task #4 reset parameter

function friend(...names: string[]): string[] {
    return names;
}

// Example usage:
console.log(friend('Taha', 'Ahmed', 'Ali'));
 // Output: ['Taha', 'Ahmed', 'Ali']
//answer=
//We define a function called friend with a rest parameter names, denoted by ...names, which allows the function to accept any number of string arguments.
//Inside the function, the rest parameter names represents an array containing all the arguments passed to the function.
//The function simply returns the names array.
//Example usage demonstrates how you cancall the friend function with different arguments and get the desired array output.

//task #5 spread function

function friend1(...names: string[]): string[] {
    const originalArray = names;
    const copiedArray = [...names];
     // Create a shallow copy of the original array

    // Remove the last element from the copied array
    const poppedName = copiedArray.pop();

    console.log("Original array:", originalArray); 
    // Output: Original array: ['Taha', 'Ahmed', 'Ali']
    console.log("Copied array:", copiedArray);    
     // Output: Copied array: ['Taha', 'Ahmed']

    return names;
}

// Example usage:
console.log(friend1('Taha', 'Ahmed', 'Ali')); 
// Output: ['Taha', 'Ahmed', 'Ali']
