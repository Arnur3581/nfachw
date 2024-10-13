const checkAge = (age) => {
  return age >= 18 ? true : confirm("Родители разрешили?");
};

let age = prompt("Сколько вам лет?");

checkAge(age);

// =======================================================
const exponentation = (number, power) => number ** power;

console.log(exponentation(2, 3));

// =======================================================
const ask = (question, yes, no) => {
  return confirm(question) ? yes : no;
};

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

// ========================================================
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[j + 1]) {
//         let prev = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = prev;
//       }
//     }
//   }

//   return arr;
// };
// console.log(bubbleSort(arr));

alert(arr);
// ===========================================================
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((user) => user.name);

alert(names); // Вася, Петя, Маша

// ==============================================================
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [vasya1, petya1, masha1];

let usersMapped = users1.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

// =====================================================
const getAverageAge = (users) => {
  let ages = users.map((user) => user.age);
  let averageAges = 0;

  for (let i = 0; i < users.length; i++) {
    averageAges += ages[i] / ages.length;
  }

  return averageAges;
};

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr2 = [vasya2, petya2, masha2];

alert(getAverageAge(arr2));
