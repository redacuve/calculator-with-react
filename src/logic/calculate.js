import operate from './operate';

function calculate(calculator, buttonName) {
  let { total, next, operation } = calculator;
  switch (buttonName) {
    case '1':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '1';
      } else {
        total += '1';
      }
      break;
    case '2':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '2';
      } else {
        total += '2';
      }
      break;
    case '3':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '3';
      } else {
        total += '3';
      }
      break;
    case '4':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '4';
      } else {
        total += '4';
      }
      break;
    case '5':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '5';
      } else {
        total += '5';
      }
      break;
    case '6':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '6';
      } else {
        total += '6';
      }
      break;
    case '7':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '7';
      } else {
        total += '7';
      }
      break;
    case '8':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '8';
      } else {
        total += '8';
      }
      break;
    case '9':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '9';
      } else {
        total += '9';
      }
      break;
    case '0':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = '0';
      } else {
        total += '0';
      }
      break;
    case '+/-':
      if (total) {
        total = (total * -1).toString();
      }
      if (next) {
        next = (total * -1).toString();
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+':
      if (total) {
        next = total;
        total = null;
      }
      operation = '+';
      break;
    case '-':
      if (total) {
        next = total;
        total = null;
      }
      operation = '-';
      break;
    case '×':
      if (total) {
        next = total;
        total = null;
      }
      operation = '×';
      break;
    case '÷':
      if (total) {
        next = total;
        total = null;
      }
      operation = '÷';
      break;
    case '%':
      if (total) {
        next = total;
        total = null;
      }
      operation = '%';
      break;
    case '.':
      if (total && !total.includes('.')) {
        total += '.';
      }
      break;
    case '=':
      total = operate(total, next, operation).toString();
      break;
    default:
      break;
  }
  return { total, next, operation };
}

export default calculate;
