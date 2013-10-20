describe('Truth', function () {
    it('should be true', function () {
        true.should.be.true;
    });

    it('should not be false', function () {
        true.should.not.be.false;
    });
});

describe('foo variable', function () {
    var foo = 'bar';
    
    it('should equal bar', function () {
        foo.should.equal('bar');
    });
});


describe('ok', function() {
    it('truthfulness', function() {
        true.should.be.ok;
        'some'.should.be.ok;
        (1).should.be.ok;
    });

    it('negated', function() {
        false.should.be.not.ok;
        ''.should.not.be.ok;
        (0).should.not.be.ok;
    });
});

describe('true, false, empty', function() {
    it('true', function() {
        true.should.be.true;
        '1'.should.not.be.true;
    });

    it('false', function() {
        false.should.be.false;
        'some'.should.not.be.false;
    });

    it('empty', function() {
        ''.should.be.empty;
        [].should.be.empty;
        [1, 2, 3].should.be.not.empty;
    });

    it('eql', function() {
        ({ foo: 'bar' }).should.eql({ foo: 'bar' });
        [1,2,3].should.eql([1,2,3]);
        (5).should.eql(5);
        ("").should.eql("");
    });

    it('equal & exactly', function() {
        (4).should.equal(4);
        'test'.should.equal('test');
        [1,2,3].should.not.equal([1,2,3]);
        (4).should.be.exactly(4);
    });

    it('within', function() {
        var age = 4;
        age.should.be.within(1, 100);
    });

    it('approximately', function() {
        (99.99).should.be.approximately(100, 0.1);
    });

    it('instanceof', function() {
        [].should.be.an.instanceof(Array);
        [].should.be.an.instanceOf(Array);
    });

    it('above', function() {
        (7).should.be.above(5);
        (90).should.not.be.above(100);
    });

    it('NaN', function() {
        (undefined + 0).should.be.NaN;
    });

    it('match', function() {
        'value'.should.match(/^\w+$/);
        '123 value'.should.not.match(/^\w+$/);
    });

    it('length', function() {
        var user = {
            pets: [1, 2, 3], 
            length: 10
        };

        user.pets.should.have.length(3);
        user.pets.should.have.a.lengthOf(3);
        user.should.have.length(10);
    });

    it('property', function() {
        var user = {
            name: "Julia",
            age: 21
        };

        user.should.have.property('name');
        user.should.have.property('age', 21);
        user.should.not.have.property('abc');
        user.should.not.have.property('age', 0);
    });

    it('properties', function() {
        var user = {
            name: 'Julia', 
            age: '21'
        };

        user.should.have.properties('name', 'age');
        user.should.have.properties(['name', 'age']);
    });
});

describe('include or contain', function() {
    it('include: assert array value', function() {
        var actualValues = [1, 2, 3];

        actualValues.should.include(3);
        actualValues.should.include(2);
        actualValues.should.not.include(4);
    });

    it('include: assert substring', function() {
        'foo bar baz'.should.include('foo');
        'foo bar baz'.should.include('bar');
        'foo bar baz'.should.include('baz');
        'foo bar baz'.should.not.include('FOO');
    });

    it('include: assert object includes another object', function() {
        var tobi = { name: 'Tobi', age: 1 };
        var jane = { name: 'Jane', age: 5 };
        var user = { name: 'TJ', pet: tobi };

        user.should.include({ pet: tobi });
        user.should.include({ pet: tobi, name: 'TJ' });
        user.should.not.include({ pet: jane });
        user.should.not.include({ name: 'Someone' });
    });

    it('includeEql', function() {
        [[1],[2],[3, 2]].should.includeEql([3, 2]);
        [[1],[2],[3]].should.includeEql([2]);
        [[1],[2],[3]].should.not.includeEql([4]);
    });
});

describe('throw', function() {
    it('assert an exception is thrown', function() {
        (function() {
            throw new Error('fail');
        }).should.throw();
    });

    it('assert an exception is not thrown', function() {
        (function() {

        }).should.not.throw();
    });

    it('assert exception message matches string', function() {
        (function() {
            throw new Error('fail');
        }).should.throw('fail');
    });

    it('throwError', function() {
        (function() {
          throw new Error('failed to baz');
        }).should.throwError(/^fail.*/);
    });
});

describe('string', function() {
    it('startWith', function() {
        'foobar'.should.startWith('foo');
        'foobar'.should.not.startWith('bar');
    });

    it('endWith', function() {
        'foobar'.should.endWith('bar');
        'foobar'.should.not.endWith('foo');
    });
});

describe('keys & type assertions', function() {
    it('keys', function() {
        var obj = {foo: 'bar', baz: 'raz'};

        obj.should.have.keys('foo', 'baz');
        obj.should.have.keys(['foo', 'baz']);
    });

    it('type assertions', function() {
        ({}).should.be.an.Object;
        (1).should.be.an.Number;
        [].should.be.an.Array;
        (true).should.be.an.Boolean;
        ''.should.be.an.String;
    });
});

