const sumAll = function (a, b) {
  let sum = 0;
  let smallInt = a;
  let bigInt = b;

  if (!Number.isFinite(a) || !Number.isFinite(b) || a < 0 || b < 0) {
    return 'ERROR';
  } else if (b < a) {
    smallInt = b;
    bigInt = a;
  }

  for (let i = smallInt; i <= bigInt; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
