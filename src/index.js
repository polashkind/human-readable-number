module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero';
  }

  const hundred = Math.floor(number / 100);
  const dec = Math.floor(number % 100 / 10);
  const num = number % 10;

  const stringHundred = hundred !== 0 ? numberToReadable(hundred) + ' hundred ' : '';
  const stringNum = dec < 2 ? numberToReadable(dec * 10 + num) : numberToReadable(dec * 10) + ' ' + numberToReadable(num);

  return (stringHundred + stringNum).trim();
}

/**
 * 
 * @param {number} number 
 * @returns {string}
 */
function numberToReadable(number) {
  switch (number) {
    case 1: return 'one';
    case 2: return 'two';
    case 3: return 'three';
    case 4: return 'four';
    case 5: return 'five';
    case 6: return 'six';
    case 7: return 'seven';
    case 8: return 'eight';
    case 9: return 'nine';
    case 10: return 'ten';
    case 11: return 'eleven';
    case 12: return 'twelve';
    case 13: return 'thirteen';
    case 14: return 'fourteen';
    case 15: return 'fifteen';
    case 16: return 'sixteen';
    case 17: return 'seventeen';
    case 18: return 'eighteen';
    case 19: return 'nineteen';
    case 20: return 'twenty';
    case 30: return 'thirty';
    case 40: return 'forty';
    case 50: return 'fifty';
    case 60: return 'sixty';
    case 70: return 'seventy';
    case 80: return 'eighty';
    case 90: return 'ninety';
    default: return '';
  }
}
