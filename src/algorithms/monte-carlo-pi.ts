// The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
// Hint: The basic equation of a circle is x2 + y2 = r2.

const piEstimation = (r = 10000): number => {
  // x^2 + y^2 = 1
  let [circlePoints, squarePoints] = [0, 0];
  for (let i = 0; i < r; i++) {
    const randX = Math.random();
    const randY = Math.random();
    const originDist = randX ** 2 + randY ** 2;
    if (originDist < 1) circlePoints++;
    squarePoints++;
  }

  const pi = 4 * circlePoints / squarePoints;

  return pi;
};

console.log(piEstimation());
