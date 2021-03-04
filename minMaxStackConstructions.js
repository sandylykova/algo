// AlgoExpert: Min Max Stack Construction
// Difficulty: medium

// Solution 1

class MinMaxStack {
	constructor() {
		this.min = [];
		this.max = [];
		this.stack = [];
	}
  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
		this.min.pop();
		this.max.pop();
    return this.stack.pop();
  }

  push(number) {
    this.stack.push(number);
		if (this.min.length === 0) this.min.push(number);
		else {
			let last = this.min[this.min.length - 1];
			if (last > number) {
				this.min.push(number);
			} else {
				this.min.push(last);
			}
		}
		if (this.max.length === 0) this.max.push(number);
		else {
			let last = this.max[this.max.length - 1];
			if (last < number) {
				this.max.push(number);
			} else {
				this.max.push(last);
			}
		}
  }

  getMin() {
    return this.min[this.min.length - 1];
  }

  getMax() {
    return this.max[this.max.length - 1];
  }
}
