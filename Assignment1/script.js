// Week 2: Assignment 1 - JavaScript Essentials
console.log(`\n`);

// 2 variables, printed in console
let favBook = 'Atomic Habits';
let favMovie = 'Fast & Furious';

console.log(`Favorite Book: ${favBook}`);
console.log(`Favorite Movie: ${favMovie}`);
console.log(`\n`);

// Pi including first 5 digits, printed in console
let pi = 3.14159;
console.log(pi);
console.log(`\n`);

// array including 5 of my favorite foods, printed in console
let array = ['Steak', 'Chicken', 'Oats', 'Cheese', 'Bread'];
console.log(array);
// same array adding 2 of my favorite foods, printed in console
array.splice(5, 0, 'Strawberries', 'Blueberries');
console.log(array);
// same array removing 1 of the foods, printed in console
array.splice(4, 1);
console.log(array);
console.log(`\n`);

// numerical grade that gets checked for what grade it is in letter grades, printed in console
let grade = 80;
console.log(`Numerical Grade: ${grade}`);
// if statement checking grade value starting from 60 up to 90
if (grade < 60) {
    console.log(`Letter Grade: F`);
} else if (grade < 70) {
    console.log(`Letter Grade: D`);
} else if (grade < 80) {
    console.log(`Letter Grade: C`);
} else if (grade < 90) {
    console.log(`Letter Grade: B`);
} else {
    console.log(`Letter Grade: A`);
}
console.log(`\n`);

// for loop printing out all numbers between 0 and 20
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
console.log(`\n`);

// function receiving two numbers as input and returning the bigger number
function findMax(num1, num2) {
    // return number 1 if it's bigger
    if (num1 > num2) {
        return num1;
        // return string indicating numbers are equal if they are
    } else if (num1 == num2) {
        return "equal";
    }
    // else return number 2
    else {
        return num2;
    }
}
console.log(`Max out of 44 und 56: ${findMax(44, 56)}`);
console.log(`Max out of 50 und 50: ${findMax(50, 50)}`);
console.log(`Max out of 76 und 24: ${findMax(76, 24)}`);
console.log(`\n`);

// function receiving a name and a major, returning a String including those two inputs in a question
function customGreeting(name, major) {
    return `Hello ${name}! How do you like taking ${major}?`
}
console.log(customGreeting('Adam', 'Computer Science'));
console.log(`\n`);