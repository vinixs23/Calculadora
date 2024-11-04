let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  display.innerText = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || '0';
}

function appendNumber(number) {
  currentInput += number;
  display.innerText = currentInput;
}

function appendOperator(op) {
  if (currentInput === '' && previousInput !== '') {
    operator = op;
    return;
  }
  if (currentInput !== '') {
    calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
  }
}

function calculate() {
  if (previousInput === '' || currentInput === '') return;
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr !== 0 ? prev / curr : 'Erro';
      break;
    default:
      return;
  }
  display.innerText = result;
  currentInput = result;
  previousInput = '';
  operator = '';
}