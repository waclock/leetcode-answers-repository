const iterateMedians = (arr) => {
  const currArr = [];
  arr.forEach(element => {
    currArr.push(element);
    currArr.sort((a, b) => a - b);
    const median = currArr.length % 2 ? currArr[(currArr.length + 1) / 2 - 1] :
      (currArr[currArr.length / 2 - 1] + currArr[currArr.length / 2]) / 2;
    console.log(median);
  });
};

const input = [2, 1, 5, 7, 2, 0, 5];

console.log(iterateMedians(input));

const a = 'a';
