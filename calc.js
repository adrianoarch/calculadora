function insertValues(num) {
  const displayCalc = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = displayCalc + num;
}

function calculate() {
  const displayCalc = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = eval(displayCalc);
}

function resetDisplay() {
  document.getElementById("inputValue").value = "";
}

function invertValue() {
  calculate();
  const invert = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = invert * -1;
}

function percentageValue(n1, n2){
 const percentageCalc = document.getElementById("inputValue").value
 document.getElementById("inputValue").value = eval(percentageCalc) / 100
}
