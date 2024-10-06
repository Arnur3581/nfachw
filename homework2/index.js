const restaurant = {
  name: "Ocean Basket",
  founded: 1995,
  isOpen: true,
  chef: null,
  specialDishes: undefined,
};

restaurant.rating = 4.5;
console.log(restaurant.rating);

restaurant.rating = 4.9;
console.log(restaurant.rating);

delete restaurant.isOpen;
console.log(restaurant, restaurant.isOpen);

delete restaurant["rating"];
console.log(restaurant["rating"]);

// ========================================================
const vehicle = {
  brandName: "BMW",
  model: "X5",
};

vehicle.model = "M1";
console.log(vehicle.model);

delete vehicle.model;
console.log(vehicle.model);

// ========================================================
let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130,
};

let totalSumOfSalaries = 0;

for (let person in salaries) {
  totalSumOfSalaries += salaries[person];
}

console.log(totalSumOfSalaries);
