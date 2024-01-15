// **let numbers = [10, 10, 20, 20, 30, 30, 50, 50];
// **let uniqueNumbers = [...new Set(numbers)];

// **console.log(uniqueNumbers);


// In the provided code, there are several concepts being used in the JavaScript language to work with arrays of numbers.

// First, we have the array `numbers` that contains a set of numbers. In this example, the numbers are `[10, 10, 20, 20, 30, 30, 50, 50]`. It appears that the numbers are repeated in the array.

// Then, a new concept in JavaScript called a "Set" is utilized to remove duplicate elements from the array. Here, we use the expression `new Set(numbers)` to create a new set that contains only the unique elements from the array. In this case, the set will contain the numbers `[10, 20, 30, 50]`.

// Finally, the spread syntax `...` is used to convert the set into a new array. The unique elements are stored in the `uniqueNumbers` array.

// At the end of the code, `console.log(uniqueNumbers)` is used to print the `uniqueNumbers` array to the console in the browser or runtime environment. The unique numbers `[10, 20, 30, 50]` will be displayed in the console.
//  **************************edabit*************************

//*1*This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:

// function hello() {

// }
// All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.

// Notes
// The returned string must be in all lowercase letters.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// **Solutions**
// function hello() {
//     return "hello edabit.com";
// }

// **2-Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.

// Examples
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50
// Notes
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// **Solutions**
// function triArea(base, height) {
//     return (base * height) / 2;
// }

// // Examples
// console.log(triArea(3, 2)); // Output: 3
// console.log(triArea(7, 4)); // Output: 14
// console.log(triArea(10, 10)); // Output: 50


//**  


// Create a function that takes voltage and current and returns the calculated power.

// Examples
// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600 


// **Solutions**


// function circuitPower(voltage, current) {
//     return voltage * current;
// }

// // Examples
// console.log(circuitPower(230, 10)); // Output: 2300
// console.log(circuitPower(110, 3));  // Output: 330
// console.log(circuitPower(480, 20)); // Output: 9600
