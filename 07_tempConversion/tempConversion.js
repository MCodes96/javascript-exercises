const ftoc = function (f) {
  let result = (f - 32) * (5 / 9);
  return Number(result.toFixed(1));
};

const ctof = function (c) {
  let result = c * (9 / 5) + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
