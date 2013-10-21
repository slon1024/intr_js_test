
//module() - Group related tests under a single label.
module('ok');

//test() - Add a test to run.
//ok() - A boolean assertion, equivalent to CommonJS’s assert.ok() and JUnit’s assertTrue(). Passes if the first argument is truthy.
test("ok", function() {
    ok(true, 'true is ok');
});

module('equal and notEqual'); //equals -> equal
//A non-strict comparison assertion, roughly equivalent to JUnit assertEquals.
test('equal', function() {
    equal(true, true, 'true equals true');
    equal(3, 3, '3 equals 3');
    equal('', '', 'empty string equals another empty string');

    equal( 0, false, 'true'); 
    equal( null, undefined, 'true');
});

//strictEqual() - A strict type and value comparison assertion.
test('scrictEqual', function() {
    strictEqual(1, 1, '1 strictEqual 1');
    strictEqual('', '', 'empy string strictEqual empty string');
    
});

//notStrictEqual() - A strict comparison assertion, checking for inequality.
test('notStrictEqual', function() {
    notStrictEqual([], [], '[] notStrictEqual []');
    notStrictEqual({}, {}, '{} notStrictEqual {}');

    notStrictEqual( 0, false, '0 notStrictEqual false');       
    notStrictEqual( null, undefined, 'null notStrictEqual undefined');
});

//notEqual() - A non-strict comparison assertion, checking for inequality.
test('notEqual', function() {
    notEqual([], [], '[] notEqual [], equal works only with primitive');
    notEqual([1, 2, 3], [1, 2, 3], '[1, 2, 3] notEqual [1, 2, 3], equal works only with primitive');
    notEqual({}, {}, '{} notEqual {}, equal works only with primitive');
    notEqual({foo: 'bar'}, {foo: 'bar'}, '{foo: \'bar\'} notEqual {foo: \'bar\'}, equal works only with primitive');
    });


module('deepEqual and notDeepEqual'); //some -> deepEqual

//deepEqual() - A deep recursive comparison assertion, working on primitive types, arrays, objects, regular expressions, dates and functions.
test('deepEqual', function() {
    deepEqual([], [], '[] deepEqual []');
    deepEqual([1, 2, 3], [1, 2, 3], '[1, 2, 3] deepEqual [1, 2, 3]');
    deepEqual([[1], [2], [3]], [[1], [2], [3]], '[[1], [2], [3]] deepEqual [[1], [2], [3]]');

    deepEqual({}, {}, '{} deepEqual {}');
});

//notDeepEqual() - An inverted deep recursive comparison assertion, working on primitive types, arrays, objects, regular expressions, dates and functions.
test('notDeepEqual', function() {
    notDeepEqual([], [1, 2, 3], '[] notDeepEqual [1, 2, 3]');

    notDeepEqual( 0, false, '0 notDeepEqual false');       
    notDeepEqual( null, undefined, 'null notDeepEqual undefined');
});

module('throws exception');
MyException = function(message) {
    this.message = message;

    this.toString = function() {
        return this.message;
    };
};
//Assertion to test if a callback throws an exception when run.
test('throw "error"', function() {
    var myException = new MyException('some valuable message');
    throws(
        function() { throw 'error' },
        'throws with just a message, no expected'
    );

    throws(
        function() { throw myException; },
        MyException,
        "raised error is an instance of MyException"
    ); 

    throws(
        function() { throw myException; },
        /message/,
        'raised error message contains "message"'
    ); 
});


module('expect');
//expect() - specify how many assertions are expected to run within a test.
test('test withc expect', function() {
  expect(2);

  ok(true, true);
  equal(true, true, 'true is true'); 
});
