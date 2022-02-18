const displayCalculate = document.getElementById("inputValue");

function insertValues(num) {
  displayCalculate.value = displayCalculate.value + num;
}

function calculate() {
  displayCalculate.value = eval(displayCalculate.value);
}

function resetDisplay() {
  displayCalculate.value = "";
}

function invertValue() {
  calculate();
  displayCalculate.value = displayCalculate.value * -1;
}

function percentageValue(n1, n2) {
  displayCalculate.value = eval(displayCalculate.value) / 100;
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    document.getElementById("result").click();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("reset").click();
  }
});