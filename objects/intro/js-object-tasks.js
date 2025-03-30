// Task 01 – Employee Profile
// Create an object to represent an employee with name, position, skills, and experience.
// Output a formatted description based on the object's data.

const employee = new Object();

employee.fullName = "John Doe";
employee.position = "Junior Developer Assistant";
employee.skills = [
  "Observes senior developers' workflows",
  "Practices coding at home",
  "Eager to contribute meaningful code in the future",
];
employee.experienceYears = 2;

console.log(
  `${employee.fullName} works as a ${employee.position}, has ${employee.experienceYears} years of experience, and is skilled in: ${employee.skills.join(", ")}.`
);


// Task 02 – Skill Check
// Check if the employee has a specific skill using the includes() method.
// Output a sentence depending on whether the skill is found or not.

const requiredSkill = "TypeScript";

const message = employee.skills.includes(requiredSkill)
  ? `${employee.fullName} is skilled in ${requiredSkill}`
  : `${employee.fullName} does not know ${requiredSkill}`;

console.log(message);



// Task 03 – Ticket Price Calculator
// Calculate the final price of a ticket based on discount availability.
// If a discount is applied, subtract the discount percentage from the base price.
// Output the final result in a readable format.

const ticket = {
  basePrice: 40,
  hasDiscount: true,
  discountPercent: 15,
};

let finalPrice;

if (ticket.hasDiscount) {
  finalPrice = Math.round(ticket.basePrice - (ticket.basePrice * ticket.discountPercent) / 100);
  console.log(`${ticket.basePrice} - ${ticket.discountPercent}% = ${finalPrice}`);
} else {
  finalPrice = ticket.basePrice;
  console.log(`No discount applied. Price: ${finalPrice}`);
}



// Task 04 – Dynamic Property Lookup
// Given a user profile object, access a property dynamically using a variable.
// Output the value if the property exists, or show a message if it doesn't.

const profile = {
  name: "Lena",
  email: "lena@domain.com",
  telegram: "@lenka123",
  github: "github.com/lenka",
};

let keyToCheck = "telegram"; // Try changing this to "linkedin"

if (profile[keyToCheck]) {
  console.log(`${profile.name}'s ${keyToCheck} is: ${profile[keyToCheck]}`);
} else {
  console.log(`No data available for ${keyToCheck}`);
}



// Task 05 – Task Report Generator
// Create a formatted task report based on task status.
// If task is 'done', show a completion message. Otherwise, show days remaining.

const task = {
  title: "Ticket JD-73715",
  assignee: "Steven Smith",
  status: "in progress",
  deadlineDays: 3,
};

let output =
  task.status === "done"
    ? "✅ Task completed"
    : `📅 Days until deadline: ${task.deadlineDays}`;

let report = `
📌 Task: ${task.title}
👨‍💻 Assignee: ${task.assignee}
📊 Status: ${task.status}
${output}`;

console.log(report);


// Task 06 – Beer Menu Formatter
// Create an object representing a beer with basic properties.
// Output a formatted string with the name, ABV, and availability.
// If the beer is not available, show an alternative message.

const beer = {
  name: "Amazza Torro",
  abv: 12,
  isAvailable: true,
};

let drinkInfo = beer.isAvailable
  ? `"${beer.name}" — ${beer.abv}% ABV. Availability: yes.`
  : "Sorry, beer is out of stock. Tap water is today's special.";

let menuOffer = `Today's menu: ${drinkInfo}`;
console.log(menuOffer);

// Debug: log the beer object to confirm no properties were mutated
console.log(beer);



// Task 07 – Count Object Keys
// Create an object and use Object.keys() to count how many top-level properties it contains.
// Output the result in a formatted message.

const breakfast = {
  mainDrink: "coffee",
  secondDrink: "milk",
  cookies: true,
};

const quantity = Object.keys(breakfast); // returns an array of keys
const num = quantity.length;

console.log(`Breakfast includes ${num} main components.`);
