const outOfOrder = (arr) => {
  let stack = [];
  let aux = [];
  let counter = 0;
  arr.forEach(element => {
    aux = [...stack];
    while (stack.length > 0) {
      const popped = stack.pop();
      if (popped > element) counter++;
    }
    stack = [...aux];
    stack.push(element);
  });

  return counter;
};

const input = [5, 4, 3, 2, 1];

console.log(outOfOrder(input));
