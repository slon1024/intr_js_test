function State() {
    
    this.setState = function(state) {
        this.state = state;
    };

    this.addState = function(state) {
        if (typeof this.state == "undefined") {
            this.state = [state];   
        }else if (Array.isArray(this.state)) {
            this.state.push(state);
        }else {
            this.state = [this.state, state];
        }   
    };

    this.getState = function() {
        return this.state;
    };
};