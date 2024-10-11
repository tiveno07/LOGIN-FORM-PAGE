const inputs = document.querySelectorAll(".input");

const addFocusClass = (e) => {
  const parent = e.target.parentNode.parentNode;
  parent.classList.add("focus");
};

const removeFocusClass = (e) => {
  const parent = e.target.parentNode.parentNode;

  if (e.target.value === "") {
    parent.classList.remove("focus");
  }
};

inputs.forEach((input) => {
  input.addEventListener("focus", addFocusClass);

  input.addEventListener("blur", removeFocusClass);
});
