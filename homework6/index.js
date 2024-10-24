const button = document.querySelector(".button");
const text = document.getElementById("text");

button.onclick = () => {
  text.remove();
};

// ==========================================================
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

// Сначала выведится 1, затем 2

// ==========================================================
const panes = document.querySelectorAll(".pane");

panes.forEach((pane) => {
  const removeButton = createRemoveButtonElement();

  removeButton.onclick = () => pane.remove();

  pane.append(removeButton);
});

function createRemoveButtonElement() {
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "[x]";

  return removeButton;
}

// ============================================================
