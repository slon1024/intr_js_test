MyException = function(message) {
    this.message = message;

    this.toString = function() {
        return this.message;
    };
};
