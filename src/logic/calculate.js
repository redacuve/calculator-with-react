import operate from './operate';

function calculate(calculator, buttonName) {
  let { total, next } = calculator;
  const { operation } = calculator;
  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case 'AC':
      total = 0;
      next = 0;
      break;
    case '=':
      total = operate(total, next, operation);
      break;
    default:
      break;
  }
  return { total, next, operation };
}

export default calculate;
