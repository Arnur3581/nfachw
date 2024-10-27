// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
// }

// delay(3000).then(() => alert("выполнилось через 3 секунды"));

// ================================================================
let promise = new Promise(function (resolve) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
// 1, поскольку после первого resolve остальные будут прогигнорированы

// =================================================================

/* 
promise.then(f1, f2);
promise.then(f1).catch(f2);

Нет, они не эквивалетны.

В первом примере при resolve будет выполнена f1, a при reject f2.
Но при ошибке в f1, ошибка не будет обработана, f2 не сработает

Во-втором примере при resolve будет выполнена f1, a при reject f2.
Но теперь при ошибке в f1, она будет обработана в catch.
*/
