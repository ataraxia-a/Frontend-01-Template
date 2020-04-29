// TODO: 补充写完函数 convertStringToNumber 以及函数 convertNumberToString

function convertNumberToString(number, x = 10) {
    let integer = Math.floor(number);
    let fraction = null;
    let string = '';

    if (x === 10) fraction = ('' + number).match(/\.\d*/)[0];

    // ICU 代码。。。
    if (integer > 0) string = integer % x + string,integer = Math.floor(integer / x);
    
    return fraction ? string + fraction : string;
}

function convertStringToNumber(string, radix = 10) {
  if (radix >= 10) return;
  
  let flag = /[eE]/.test(string);

  if (!flag) {
    let chars = string.split('');
    let number = 0;
    let fraction = 1;

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== '.') {
            number = number * radix;
            number += chars[i].codePointAt(0) - '0'.codePointAt(0);
        } else {
            fraction /= radix;
            number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
        }
    }

    return number;

  } else {

    let logNumber = Number(string.match(/\d+$/)[0]);
    let number = string.match(/^[\d.]+/)[0].replace(/\./, '');

    return /e-|E-/.test(string)
      ? Number(number.padEnd(logNumber + 1, 0))
      : Number(number.padStart(logNumber + number.length, 0).replace(/^0/, '0.'));

  }
}