describe("Spy", function() {
    var person = null, expectedValue = null;
    beforeEach(function() {
        person = new Person("Jim", 25);
        expectedValue = "Julia";
    });

    afterEach(function() {
        person = null;
        expectedValue = null;
    });

    it("was called", function() {
        spyOn(person, 'getName');

        person.getName();

        expect(person.getName).toHaveBeenCalled();
    });

    it("tracks the number of calls", function() {
        spyOn(person, 'addYear');

        person.addYear();
        person.addYear();

        expect(person.addYear.calls.length).toEqual(2);
    });

    it("tracks call arguments", function() {
        spyOn(person, 'setName');
        
        person.setName(expectedValue);

        expect(person.setName).toHaveBeenCalledWith(expectedValue);
    });

    it("has access to the last call", function() {
        spyOn(person, 'setName');

        person.setName(expectedValue);

        expect(person.setName.mostRecentCall.args[0]).toEqual(expectedValue);
    });

    it("has access to all calls", function() {
        spyOn(person, 'setName');

        person.setName(expectedValue);

        expect(person.setName.calls[0].args[0]).toEqual(expectedValue);
    });

    it("calls original function", function() {
        spyOn(person, 'getName').andCallThrough();

        expect(person.getName()).toEqual("Jim");
        expect(person.getName).toHaveBeenCalled();
    });

    it("returns fake value", function() {
        spyOn(person, 'getName').andReturn(expectedValue);

        expect(person.getName()).toEqual(expectedValue);
        expect(person.getName).toHaveBeenCalled();
    });

    it("calls fake function", function() {
        spyOn(person, 'getAge').andCallFake(function() {
            return 12 * 3;
        });

      expect(person.getAge()).toEqual(36);
      expect(person.getAge).toHaveBeenCalled();
    });

    it("creates fake function", function() {
        var concat = jasmine.createSpy('CONCAT');

        concat("one", "two");

        expect(concat.identity).toEqual('CONCAT');
        expect(concat).toHaveBeenCalledWith("one", "two");
        expect(concat.calls.length).toEqual(1);
    });

    it("creates fake object", function() {
        var button = jasmine.createSpyObj('BUTTON', ['click', 'setTitle', 'getTitle']);

        button.click();
        button.setTitle("Help");

        expect(button.click).toBeDefined();
        expect(button.click).toHaveBeenCalled();
        expect(button.setTitle).toHaveBeenCalledWith("Help");
        expect(button.getTitle).not.toHaveBeenCalled();
    });
});

describe("Clock", function() {
    var callback = null;
    beforeEach(function() {
      callback = jasmine.createSpy('TIMER');
      return jasmine.Clock.useMock();
    });

    it("calls timeout function synchronously", function() {
      setTimeout((function() {
        return callback();
      }), 100);

      expect(callback).not.toHaveBeenCalled();
      jasmine.Clock.tick(101);
      expect(callback).toHaveBeenCalled();
    });
});

describe("Any", function() {
    var person;
    person = null;
    beforeEach(function() {
        person = new Person("Jim", 25);
    });

    it("checks type name", function() {
      spyOn(person, 'setName');
      person.setName("Julia");

      expect(person.setName).toHaveBeenCalledWith(jasmine.any(String));
    });
});