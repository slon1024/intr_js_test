var buster = require('buster');
var assert = buster.assertions.assert;

buster.testCase('stubs and spies', {
    'called': function() {
        var spy = this.spy();

        spy();

        assert.called(spy);
    },
    'callOrder': function() {
        var spy1 = this.spy();
        var spy2 = this.spy();
        var spy3 = this.spy();

        spy1();
        spy2();
        spy3();

        assert.callOrder(spy1, spy2, spy3);
    },
    'called[Once|Twice|Thrice]': function() {
        var spy = this.spy();

        spy();
        assert.calledOnce(spy);

        spy();
        assert.calledTwice(spy);

        spy();
        assert.calledThrice(spy);
    },
    'calledOn': function() {
        var spy = this.spy();
        var obj1 = {};
        var obj2 = {};
        var obj3 = {};

        spy.call(obj2);
        spy.call(obj3);

        assert.calledOn(spy, obj2); // Passes
        assert.calledOn(spy, obj3); // Passes
    },
    'alwaysCalledOn': function() {
        var spy = this.spy();
        var obj1 = {};

        spy.call(obj1);
        spy.call(obj1);
        spy.call(obj1);

        assert.alwaysCalledOn(spy, obj1);
    },
    'calledWith': function() {
        var spy = this.spy();
        var arr = [1, 2, 3];

        spy(12);
        spy(42, 13);
        spy('Hey', arr, 2);

        assert.calledWith(spy, 12);
        assert.calledWith(spy, 'Hey');
        assert.calledWith(spy, 'Hey', arr);
    },
    'alwaysCalledWith': function() {
        var spy = this.spy();
        var arr = [1, 2, 3];

        spy('Hey', arr, 12);
        spy('Hey', arr, 13);

        assert.alwaysCalledWith(spy, 'Hey');
        assert.alwaysCalledWith(spy, 'Hey', arr);
    },
    'calledOnceWith': function() {
        var spy = this.spy();

        spy(12);

        assert.calledOnceWith(spy, 12);
    },
    'calledWithExactly': function() {
        var spy = this.spy();
        var arr = [1, 2, 3];

        spy('Hey', arr, 12);
        spy('Hey', arr, 13);

        assert.calledWithExactly(spy, 'Hey', arr, 12);
        assert.calledWithExactly(spy, 'Hey', arr, 13);
    },
    'alwaysCalledWithExactly': function() {
        var spy = this.spy();
        var arr = [1, 2, 3];
        
        spy('Hey', arr, 12);
        spy('Hey', arr, 12);
        spy('Hey', arr, 12);

        assert.alwaysCalledWithExactly(spy, 'Hey', arr, 12);
    },
    'threw': function() {
        var exception1 = new TypeError();
        var exception2 = new TypeError();
        var exception3 = new TypeError();
        var spy = this.spy(function(exception) {
            throw exception;
        });
        function callAndCatchException(spy, exception) {
            try {
                spy(exception);
            } catch(e) {}
        }

        callAndCatchException(spy, exception1);
        callAndCatchException(spy, exception2);

        assert.threw(spy);
        assert.threw(spy, "TypeError");
        assert.threw(spy, exception1);
        assert.threw(spy, exception2);

        callAndCatchException(spy, exception3);
        assert.threw(spy, exception3);
    }
});
