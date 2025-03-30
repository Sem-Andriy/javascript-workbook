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

// Task 04
const person = {
  firstName: "John",
  lastName: "Doe",
  email: "jd@gmail.com",
  phone: "+1 555 370 15",
};
let fieldEmail = person["email"];
let fieldPhone = person["phone"];
console.log(`Контакт для связи ${fieldEmail}.`);
console.log(`Контакт для связи ${fieldPhone}.`);
