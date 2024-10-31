let expression = '';
let lastCharIsOperator = false;

function appendNumber(number) {
  expression += number;
  document.getElementById('result').value = expression;
  lastCharIsOperator = false;
}

function appendOperator(operator) {
  if (!lastCharIsOperator) {
    expression += operator;
    document.getElementById('result').value = expression;
    lastCharIsOperator = true;
  }
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
  lastCharIsOperator = false;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = result.toString();
    lastCharIsOperator = false;
  } catch (error) {
    document.getElementById('result').value = 'Error';
    expression = '';
  }
}
