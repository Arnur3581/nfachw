const user = {};

user.name = prompt("Введите свое имя");
do {
  user.age = Number(prompt("Введите свой возвраст"));
} while (isNaN(user.age) || user.age < 0);
do {
  user.gender = String(prompt("Введите свой пол (Мужчина/Женщина)"));
  console.log(user.gender);
} while (user.gender != "мужчина" && user.gender != "женщина");

// ============================================================
let number = prompt("Введите число");

alert(number);
// ============================================================
let a = +prompt("a?", "");
console.log(a); // string
a = +a;
console.log(a); // number

switch (a) {
  case a == 0:
    alert(0);
  case a == 1:
    alert(1);
  case a == 2 || a == 3:
    alert("2,3");
}
// ===========================================================
let forLoopSum = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    forLoopSum += i;
  }
}

console.log(forLoopSum);

let whileLoopSum = 0;
let i = 0;

while (i < 100) {
  if (i % 2 == 0) {
    whileLoopSum += i;
  }

  i++;
}

console.log(whileLoopSum);
