const table = document.getElementById("age-table");
const labels = document.getElementsByTagName("label");
const td = document.getElementsByTagName("td")[0];
const form = document.querySelector("form[name='search']");
const firstInput = form.getElementsByTagName("input")[0];
const lastInput = form.getElementsByTagName("input")[form.length - 1];

console.log(table, labels, td, form, firstInput, lastInput);

// ============================================================
let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert(body.firstChild.data); // что выведет? body
