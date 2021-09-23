
const rand5 = (): number => {
  const random = Math.random();

  return parseInt((random * (5 - 1) + 1).toFixed());
};

const rand7 = (): number => rand5() + rand5() % 2;

const dict = {};

for (let i = 0; i < 1000; i++) {
  const rand = rand7();
  if (dict[rand] === undefined) dict[rand] = 0;
  else dict[rand] += 1;
}

console.log(dict);

