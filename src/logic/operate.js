import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  let result;
  if (operation) {
    if (Number.isNaN(Number(numberOne)) || Number.isNaN(Number(numberTwo))) {
      return NaN;
    }
    const n1 = Big(numberOne || 0);
    const n2 = Big(numberTwo || 0);
    switch (operation) {
      case '+':
        result = n2.plus(n1);
        break;
      case '-':
        result = n2.minus(n1);
        break;
      case '×':
        result = n2.times(n1);
        break;
      case '÷':
        if (n1.eq(Big(0))) {
          result = NaN;
        } else {
          result = n2.div(n1);
        }
        break;
      case '%':
        if (numberOne === null) {
          result = n2.div(100);
        } else {
          result = n1.times(n2).div(100);
        }
        break;
      default:
        break;
    }
    return result.toString();
  }
  return numberOne;
}

export default operate;
