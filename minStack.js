// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function(x) {
  if (this.stack.length === 0) {
      this.minStack.push(x);
  }
  else {
      let minNum = Math.min(x, this.minStack[this.minStack.length - 1]);
      this.minStack.push(minNum);
  }
  this.stack.push(x);
};

MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};
