// ✅ Basic Loop Challenges in JavaScript
// A set of beginner-level tasks focused on mastering loops (`for`, `while`)
// while applying variables, arrays, conditions, and template strings.

// ---
// 1. Repeat a Greeting 5 Times
// Task: Log the phrase "Hello, world!" five times using a `for` loop.

for (let i = 0; i < 5; i++) {
  console.log(`Hello cruel world ⚔️ ${i}`);
}

// Note: i < 5 ensures exactly 5 iterations. If you use i <= 5, it will execute 6 times (from 0 to 5).

// ---
// 2. Print Each Name in a List
// Task: Given the array below, log each name to the console.

const names = ["Lena", "Andriy", "Mark", "Sasha"];

for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]} 👋🏻`);
}

// We use names.length to ensure the loop adapts dynamically to the array size.

// ---
// 3. Sum Numbers from 1 to 100
// Task: Calculate and log the sum of numbers from 1 to 100 inclusive.

let sum1 = 0;
for (let i = 1; i <= 100; i++) {
  sum1 += i;
}
console.log("Sum from 1 to 100:", sum1); // Output: 5050
