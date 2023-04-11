var MyStack = function() {
    this.q1 = []
    this.q2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q2.push(x)

    for (let i = 0; i < this.q2.length; i++) {
        this.q1[i] = this.q2[this.q2.length - i - 1]
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
