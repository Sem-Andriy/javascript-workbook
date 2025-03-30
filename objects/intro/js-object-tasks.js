// Task 01

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

// Task 02
const requiredSkill = "TypeScript";

const message = employee.skills.includes(requiredSkill)
  ? `${employee.fullName} is skilled in ${requiredSkill}`
  : `${employee.fullName} does not know ${requiredSkill}`;

console.log(message);

// Task 03.
const ticket = {
  basePrice: 40,
  hasDiscount: true,
  discountPercent: 15,
};

const discount = Math.round(ticket.basePrice - ticket.basePrice * (ticket.discountPercent / 100));
const calcDescription = `${ticket.basePrice} - (${ticket.basePrice} * ${ticket.discountPercent / 100}) = ${discount}`;
const finalPrice = ticket.hasDiscount
  ? ticket.basePrice - discount
  : ticket.basePrice;

if (ticket.hasDiscount) {
  console.log(`Цена со скидкой ${ticket.discountPercent}%: ${calcDescription}$`);
} else {
  console.log(`Цена билета: ${ticket.basePrice}$`);
}
