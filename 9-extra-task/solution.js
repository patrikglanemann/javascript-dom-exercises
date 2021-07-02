const btnAddElement = document.querySelector(".add");
const btnSubElement = document.querySelector(".sub");
const numberElement = document.querySelector(".counter");

btnAddElement.addEventListener("click", () => {
  numberElement.textContent++;
});

btnSubElement.addEventListener("click", () => {
  numberElement.textContent--;
});
