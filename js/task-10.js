function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

buttonCreate.addEventListener("click", (amount) => {
  amount = Number(inputEl.value);

  const boxesArray = [];

  if (
    amount >= inputEl.attributes.min.value &&
    amount <= inputEl.attributes.max.value
  ) {
    for (let index = 1; index <= amount; index += 1) {
      const item = document.createElement("div");
      item.style.width = `${30 + (index - 1) * 10}px`;
      item.style.height = `${30 + (index - 1) * 10}px`;
      item.style.background = getRandomHexColor();
      boxesArray.push(item);
    }
    boxes.append(...boxesArray);
  }
});

buttonDestroy.addEventListener("click", () => {
  inputEl.value = "";
  boxes.innerHTML = "";
});
