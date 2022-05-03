const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
    if (num2 != 0) return num1 / num2;
    return 'Division by 0';
};

const operate = (leftNum, rightNum, operator) => {
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
