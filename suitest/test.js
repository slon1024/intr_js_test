var Suitest = require('./suitest.js');


var base = new Suitest('base');
base.test('exec()', function(unit) {
    unit
        .describe('test with exec()')
        .exec(true, 1) // true == 1
        .done();
});

base.test('stop()', function(unit) {
    unit.describe('test with stop()');

    var isFail = unit.exec(true === 1).is();
    if (isFail) 
        unit.stop();

    unit.done();
});

var primitive = new Suitest('primitive'); 
primitive
    .test('true == true', function(unit) {
        unit.exec(true, true).done();
    })
    .test('true == 1', function(unit) {
        unit.exec(true, 1).done();
    })
    .test('true === 1', function(unit) {
        unit.exec(true, 1, '===').done();
    })
    .test('0 == 0', function(unit) {
        unit.exec(0, 0).done();
    })
    .test('undefined == null', function(unit) {
        unit.exec(undefined, null).done();
    })
    .test('[] == []', function(unit) {
        unit.exec([], []).done();
    })
    .test('{} == {}', function(unit) {
        unit.exec({}, {}).done();
    });

var async = new Suitest('async');
async
    .test('simple async', function(unit) {
        var value = 0;

        setTimeout(
            function() {
                value = 1;
                unit.exec(value, 1).done();
            }, 500);
    });
