const palindromes = function (str) {
  let cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (cleanString === cleanString.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
