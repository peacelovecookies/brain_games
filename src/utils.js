const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = (num) => num % 2 === 0;

const findGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return findGCD(b, a % b);
};

export { getRandomNum, isEven, findGCD };
