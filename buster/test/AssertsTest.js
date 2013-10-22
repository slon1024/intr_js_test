var buster = require('buster');
var assert = buster.assertions.assert;

buster.testCase('test', {
    'test 1': function() {
        assert.equals(2 + 3, 5);
    }
});

buster.testCase('assertions', {
    'same': function() {
        var obj = { id: 42, name: "Chris" };
        assert.same(obj, obj);                       
    },
    'equals': function() {
        assert.equals(true, true, 'true equals true');
        assert.equals(1, 1, '1 equals 1');
        assert.equals('some', 'some', '"some" equals "some"');

        assert.equals([], [], '[] equals []');
        assert.equals([1, 2, 3], [1, 2, 3], '[1, 2, 3] equals [1, 2, 3]');
        assert.equals([[1], [2], [3]], [[1], [2], [3]], '[[1], [2], [3]] equals [[1], [2], [3]]');

        assert.equals({}, {}, '{} equals {}');
        assert.equals({foo: 'bar'}, {foo: 'bar'}, '{foo: \'bar\'} equals {foo: \'bar\'}');

        assert.equals(null, null, 'null equals null');
        assert.equals(undefined, undefined, 'undefined equals undefined');
        assert.equals(undefined, undefined, 'undefined equals undefined');

        assert.equals(NaN, NaN, 'NaN equals NaN');
    },
    'greater': function() {
        assert.greater(2, 1);
    },
    'less': function() {
        assert.less(0, 5);
    },
    'defined': function() {
        assert.defined(1);
        assert.defined(true);
        assert.defined('');
        assert.defined({});
        assert.defined([]);
    },
    'isNull': function() {
        assert.isNull(null);
    },
    'matcher': function() {
        assert.match("Give me something", "Give");
        assert.match({ toString: function () { return "foo"; } }, "foo");

        assert.match(true, true);
        assert.match(false, false);

        assert.match("Give me something", /^([a-z]\s*)+$/i);
        assert.match({ toString: function () { return "yeah!"; } }, /yeah/);

        assert.match(5, 5);

        assert.match("123", function (exp) { return exp == '123'; });
        assert.match(
            {toString: function () { return '42'; }}, 
            function () { return true; });

        assert.match(
            '123', 
            {test: function (arg) { return arg == 123;} });
        assert.match({
                name: 'Chris',
                profession: 'Programmer'
            }, {
                name: 'Chris'
            });
    },
    'isObject': function() {
        assert.isObject({});
        assert.isObject([1, 2, 3]);
    },
    'isFunction': function() {
        assert.isFunction(function () {});
    },
    'isTrue': function() {
        assert.isTrue(true);
        assert.isTrue(1 == true);
        assert.isTrue(null == undefined);
    },
    'isFalse': function() {
        assert.isFalse(false);
        assert.isFalse(1 === true);
        assert.isFalse(null === undefined);
    },
    'isString': function() {
        assert.isString('');
    },
    'isBoolean': function() {
        assert.isBoolean(true);
        assert.isBoolean(false);
    },
    'isNumber': function() {
        assert.isNumber(543);
    },
    'isNaN': function() {
        assert.isNaN(NaN);
    },
    'isArray': function() {
        assert.isArray([]);
        assert.isArray(Array());
    },
    'isArrayLike': function() {
        assert.isArrayLike([1, 2, 3]);
        assert.isArrayLike(arguments);
        assert.isArrayLike({ length: 0, splice: function() {} });
    },
    'exception': function() {
        assert.exception(function () {
            throw new Error('Ooops!');
        });

        assert.exception(function () {
            throw new TypeError('Ooops!');
        }, 'TypeError');
    },
    'near': function() {
        assert.near(10.3, 10, 0.5);
        assert.near(10.5, 10, 0.5);
    },
    'hasPrototype': function() {
        assert.hasPrototype(function() {}, Function.prototype);
        assert.hasPrototype(function() {}, Object.prototype);
    },
    'contains': function() {
        assert.contains([1, 2, 3], 2);
        assert.contains('abc', 'a');
    }
});
