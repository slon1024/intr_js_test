    
describe("Test suite", function() {
    it("adds two numbers together", function() {
        expect(1 + 2).toBe(3);
    });
 });

describe("Disabled", function() {
    xdescribe("disabled suite", function() {
        it("will not run, since the suite has been disabled", function() {
            expect(true).toBe(true);
        });
    });

    xit("disabled test", function() {
        expect(true).toBe(true);
    });
});

describe('Learning the matchers', function() {
    describe('compares', function() {
        it("compares using ===", function() {
          expect(1 + 2).toBe(3);
        });

        it("compares variables and objects (including content)", function() {
          var a, b;
          a = { x: 8, y: 9 };
          b = { x: 8, y: 9 };
          expect(a).toEqual(b);
          expect(a).not.toBe(b);
        });
    });
    
    describe('defined or not', function() {
        it("checks value to be defined", function() {
          expect(window.document).toBeDefined();
        });

        it("checks value to be undefined", function() {
          expect(window.notExists).toBeUndefined();
        });
    });

    describe('to be null', function() {
        it("checks value to be null", function() {
          var a;
          a = null;
          return expect(a).toBeNull();
        });
    });
    
    describe('truthy or falsy', function() {
        it("checks value to be true", function() {
          expect(5 > 0).toBeTruthy();
        });

        it("checks value to be false", function() {
          expect(5 < 0).toBeFalsy();
        });
    });

    describe('less or greater', function() {
        it("is less than 10", function () {  
            expect(2 + 3).toBeLessThan(10);  
        }); 

        it("is greater than 10", function () {  
            expect(7 + 5).toBeGreaterThan(10);  
        });

        it("checks value to be close to", function() {
            expect(1.2345).toBeCloseTo(1.2, 1);
        });
    });

    describe('match', function() {
        it("outputs the right text", function () {  
            expect("123.34").toMatch(/\d+\.\d{2}/);  
            expect("123.34").not.toMatch(/string/);
        }); 
    });

    describe('to contain', function() {
        it("should contain oranges", function () {  
            expect([1, 2, 3]).toContain(2);
            expect("one two three string").toContain("two");
        }); 
    });

    describe('exception', function() {
        it("throws exception", function() {
          var func = function() {
              window.notExists.value;
          };

          expect(func).toThrow();
        });
    });
});



describe("A spec (with setup and tear-down)", function() {
    var foo;

    beforeEach(function() {
        foo = 0;
        foo += 1;
    });

    afterEach(function() {
        foo = 0;
    });

    it("is just a function, so it can contain any code", function() {
        expect(foo).toEqual(1);
    });
    
    it("can have more than one expectation", function() {
        expect(foo).toEqual(1);
    });
});

describe('Writing custom matchers', function() {
    it("is between 5 and 30", function () {  
        expect(10).toBeBetween(5, 30);  
    });  

    it("is between 30 and 500", function () {  
        expect(100).toBeBetween(500, 30);  
    });
});

describe("Asynchronous", function() {
    var a = 0;

    it("async executes code", function() {
        
        runs(function() {
            setTimeout(function() {
            a = 5;
          }, 100);
        });

        waitsFor(function() {
          return a === 5;
        }, "the value should be changed", 150);
    });
});
