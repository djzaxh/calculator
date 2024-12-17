let selectedButton = null;

const buttons = document.querySelectorAll(".options .btn");
const calculateButton = document.getElementById("submit");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (selectedButton) {
      selectedButton.classList.remove("selected");
    }
    button.classList.add("selected");

    selectedButton = button;
  });
});

calculateButton.addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("oneNum").value);
  const num2 = parseFloat(document.getElementById("twoNum").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  if (!selectedButton) {
    alert("Please select a mode!");
    return;
  }
  let result;
  switch (selectedButton.id) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "divide":
      if (num2 === 0) {
        alert("Cannot divide by zero!");
        return;
      }
      result = num1 / num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    default:
      alert("Invalid operation!");
      return;
  }
  document.getElementById("result").innerHTML = `<h2>Result: ${result}</h2>`;
});

// i totally didnt just steal this from a stack overflow question
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && charCode != 46 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}
