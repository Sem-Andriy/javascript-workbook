// 1. Beer Rating Collector
// You have an array with beer ratings from users:

// const ratings = [4, 5, 3, 0, 5, 2, 4, 0, 3];
// Create a loop that:

// skips zero ratings (0)
// calculates the average rating
// counts how many users gave the maximum rating (5)
// Do not use built-in array methods.

const ratings = [4, 5, 3, 0, 5, 2, 4, 0, 3];

let averageRating = (sum = 0);
const average = [];
const maxRating = [];

for (let i = 0; i < ratings.length; i++) {
  const element = ratings[i];
  // skip zero ratings
  if (element === 0) continue;

  // count how many users gave the maximum rating
  if (element === 5) maxRating.push(element);

  // calculate the average rating
  average.push(element);
  sum += element;
  averageRating = sum / average.length;
}

// prettier-ignore
console.log(`At the annual beer fair in our village, the new beer "Hoppy Beard" received an average score of ${+averageRating.toFixed(2)} points, and unfortunately only ${maxRating.length} user(s) gave it the maximum rating of ${maxRating[0]} points.`);


// -------------------------------------------------------- //


// 🧩 Task 2: Special Seating Pattern
// Print a 10-row seating plan, each row having 15 seats.
// In every EVEN row, every 4th seat must be marked with "O", all others with "X".
// In ODD rows, all seats are "X".
// Output the result to the console as lines of characters.

// ✅ Why this task is important:
// It trains nested loops, modulo operator, alternating logic based on outer loop index,
// and reinforces control over structure formation using simple conditions.

for (let row = 1; row <= 10; row++) {
  let line = "";

  for (let seat = 1; seat <= 15; seat++) {
    // Even-numbered rows have special marking every 4th seat
    if (row % 2 === 0) {
      if (seat % 4 === 0) {
        line += "O";
      } else {
        line += "X";
      }
    } else {
      // Odd-numbered rows: all seats are "X"
      line += "X";
    }
  }

  console.log(line);
}

/*
Expected console output:

XXXXXXXXXXXXXXX
XXXOXXXOXXXOXXXO
XXXXXXXXXXXXXXX
XXXOXXXOXXXOXXXO
XXXXXXXXXXXXXXX
XXXOXXXOXXXOXXXO
XXXXXXXXXXXXXXX
XXXOXXXOXXXOXXXO
XXXXXXXXXXXXXXX
XXXOXXXOXXXOXXXO
*/
