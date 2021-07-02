const buttonElement = document.querySelector(".shine-button");
const liNodeList = document.querySelectorAll(".list__item");

buttonElement.addEventListener("click", () => {
  for (let i = 0; i < liNodeList.length; i++) {
    let liNodeListText = liNodeList[i].textContent;
    liNodeList[i].style.color = `${liNodeListText}`;
  }
});
