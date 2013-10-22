var buster = require('buster');
var expect = buster.assertions.expect;

buster.testCase('expectations', {
    'toBe': function() {
        expect(true).toBe(true);
    },
    'toEqual': function() {
        expect(123).toEqual(123);
    },
    'toBeGreaterThan': function() {
        expect(4).toBeGreaterThan(1);
    },
    'toBeLessThan': function() {
        expect(8).toBeLessThan(15);
    },
    'toBeDefined': function() {
        expect({}).toBeDefined();
    },
    'toBeNull': function() {
        expect(null).toBeNull();
    },
    'toMatch': function() {
        expect('some value').toMatch('value');
    },
    'toBeObject': function() {
        expect({}).toBeObject();
    },
    'toBeFunction': function() {
        expect(function() {}).toBeFunction();
    },
    'toBeTrue': function() {
        expect(true).toBeTrue();
    },
    'toBeFalse': function() {
        expect(false).toBeFalse();
    },
    'toBeString': function() {
        expect('').toBeString();
    },
    'toBeBoolean': function() {
        expect(true).toBeBoolean();
    },
    'toBeNumber': function() {
        expect(15).toBeNumber();
    },
    'toBeNaN': function() {
        expect(NaN).toBeNaN();
    },
    'toBeArray': function() {
        expect([]).toBeArray();
        expect(Array()).toBeArray();
    },
    'toBeArrayLike': function() {
        expect({ length: 0, splice: function() {} }).toBeArrayLike();
    }
});
