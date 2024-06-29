const add = function(a, b) {
  return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let total = 1;
  while (a > 1) {
    total *= a;
    a--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
