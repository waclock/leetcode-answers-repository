class Stack {
  values = [];
  maxValue;
  push(num) {
    this.values.push(num);
    this.setMax(num);
  }
  setMax(num) {
    if (!this.maxValue || num > this.maxValue) this.maxValue = num;
  }
  max() {
    return this.maxValue;
  }
  pop() {
    const res = this.values.pop();
    if (res === this.maxValue) {
      this.values.forEach(element => {
        this.setMax(element);
      });
    }

    return res;
  }
}

const stack = new Stack();

stack.push(1);
console.log(stack.max());

stack.push(5);
console.log(stack.max());

stack.push(3);
console.log(stack.max());

stack.pop();
console.log(stack.max());
