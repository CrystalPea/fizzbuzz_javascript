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
});
