// Math functions
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
    if (num2 != 0) return num1 / num2;
    return 'Division by 0';
};

const operate = (mathString) => {
    let leftNum = parseFloat(mathString.match(/^[0-9]+/g)[0]);
    let rightNum = parseFloat(mathString.match(/[0-9]+$/g)[0]);
    let operator = mathString.match(/[+\/*\-]/g)[0];

    switch (operator) {
        case '+':
            return add(leftNum, rightNum);
        case '-':
            return subtract(leftNum, rightNum);
        case '*':
            return multiply(leftNum, rightNum);
        default:
            return divide(leftNum, rightNum);
    }
};

// Get the number buttons and display working
const display = document.querySelector('.display');

const enableOperators = () => {
    const operators = document.querySelectorAll('.operator');

    operators.forEach((operator) => (operator.disabled = false));
};

const disableOperators = () => {
    const operators = document.querySelectorAll('.operator');

    operators.forEach((operator) => (operator.disabled = true));
};

const enableEquals = () => (document.querySelector('.equals').disabled = false);

const disableEquals = () => (document.querySelector('.equals').disabled = true);

const addPressedToDisplay = (e) => {
    if (!display.textContent) enableOperators();
    if (e.target.className == 'button operator') {
        disableOperators();
    }
    if (
        display.textContent[display.textContent.length - 1] == '+' ||
        display.textContent[display.textContent.length - 1] == '-' ||
        display.textContent[display.textContent.length - 1] == '/' ||
        display.textContent[display.textContent.length - 1] == '*'
    )
        enableEquals();

    display.textContent += e.target.textContent;
};

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) =>
    button.addEventListener('click', addPressedToDisplay)
);

// Clear button
const clear = () => {
    display.textContent = '';
    disableOperators();
    disableEquals();
};

document.querySelector('.clear').addEventListener('click', clear);

// Equals button
document.querySelector('.equals').addEventListener('click', () => {
    const answer = operate(display.textContent);
    console.log(answer);
    clear();
});
