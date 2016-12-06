describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe("knows when a number is", function() {
    it("divisible by 3", function() {
      expect(fizzbuzz.isDivisibleBy(3, 3)).toBe(true);
    });
  });

  describe("knows when a number is NOT", function() {
    it("divisible by 3", function() {
      expect(fizzbuzz.isDivisibleBy(4, 3)).toBe(false);
    });
  });
});
