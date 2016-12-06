describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe("knows when a number is", function() {
    it("divisible by 3", function() {
      expect(fizzbuzz.isDivisibleBy3(3)).toBe(true);
    });
    it("divisible by 5", function() {
      expect(fizzbuzz.isDivisibleBy5(5)).toBe(true);
    });
    it("divisible by 15", function() {
      expect(fizzbuzz.isDivisibleBy15(15)).toBe(true);
    });
  });

  describe("knows when a number is NOT", function() {
    it("divisible by 3", function() {
      expect(fizzbuzz.isDivisibleBy3(4)).toBe(false);
    });
    it("divisible by 5", function() {
      expect(fizzbuzz.isDivisibleBy5(3)).toBe(false);
    });
    it("divisible by 15", function() {
      expect(fizzbuzz.isDivisibleBy15(14)).toBe(false);
    });
  });

  describe("when playing, says", function() {
    it("'Fizz' when a number is divisible by 3", function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
    it("'Buzz' when a number is divisible by 5", function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
    it("'Fizzbuzz' when a number is divisible by 15", function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });
    it('"number" when a number not divisible by 3, 5 or 15', function() {
      expect(fizzbuzz.says(4)).toEqual(4);
    });
  });
});
