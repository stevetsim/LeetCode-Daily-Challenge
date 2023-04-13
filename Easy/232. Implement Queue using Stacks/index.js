var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let s1Size = this.s1.length
    for (let i = 0; i < s1Size; i++) {
        this.s2.push(this.s1.pop())
    }
    this.s2.push(x)

    let s2Size = this.s2.length
    for (let i = 0; i < s2Size; i++) {
        this.s1.push(this.s2.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.s1.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.s1[this.s1.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
