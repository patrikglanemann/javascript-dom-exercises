const inputElement = document.querySelector(".controls__input");
inputElement.addEventListener("input", () => {
  const h1Element = document.querySelector(".header__text");
  h1Element.textContent = `Hello World ${inputElement.value}`;
});

//input changes text live
//change changes text when input loses focus
