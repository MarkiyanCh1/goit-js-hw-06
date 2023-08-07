const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const inputValue = event.currentTarget;
  const inputLength = Number(inputValue.dataset.length);
  if (inputValue.value.length === inputLength) {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  } else {
    inputValue.classList.remove("valid");
    inputValue.classList.add("invalid");
  }
});
