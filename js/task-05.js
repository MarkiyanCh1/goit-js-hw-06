const inputValue = document.getElementById("name-input");
const spanValue = document.getElementById("name-output");

inputValue.addEventListener("input", (event) => {
  spanValue.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    spanValue.textContent = "Anonymous";
  }
});
