let counterValue = 0;

const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");
const userValue = document.getElementById("value");

const countDecrement = () => {
  counterValue -= 1;
  userValue.textContent = counterValue;
};

const countIncrement = () => {
  counterValue += 1;
  userValue.textContent = counterValue;
};

decrement.addEventListener("click", countDecrement);
increment.addEventListener("click", countIncrement);
