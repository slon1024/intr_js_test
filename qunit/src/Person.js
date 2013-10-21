Person = function(name, age) {
    this.name = name, this.age = age;

    this.getName = function() {
        return this.name;
    };

    this.getAge = function() {
        return this.age;
    };

    this.addYear = function() {
        this.age++;
    };
};
