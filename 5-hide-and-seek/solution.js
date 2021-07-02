const buttonElement = document.querySelector(".show-hide-button");
buttonElement.addEventListener("click", () => {
  const divElement = document.querySelector(".box");
  divElement.classList.toggle("hidden");
  if (buttonElement.textContent === "Hide") {
    buttonElement.textContent = "Show";
  } else {
    buttonElement.textContent = "Hide";
  }
});
