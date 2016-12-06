var Fizzbuzz = function() {

  Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

  Fizzbuzz.prototype.isDivisibleBy3 = function(number) {
    return this._isDivisibleBy(number, 3);
  };

  Fizzbuzz.prototype.isDivisibleBy5 = function(number) {
    return this._isDivisibleBy(number, 5);
  };

  Fizzbuzz.prototype.isDivisibleBy15 = function(number) {
    return this._isDivisibleBy(number, 15);
  };

  Fizzbuzz.prototype.says = function(number) {
    if (this.isDivisibleBy15(number)) {
      return "FizzBuzz";
    }
    if (this.isDivisibleBy3(number)) {
      return "Fizz";
    }
    if (this.isDivisibleBy5(number)) {
      return "Buzz";
    }
    else { return number; }
  };
};
