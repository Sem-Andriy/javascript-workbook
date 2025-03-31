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
