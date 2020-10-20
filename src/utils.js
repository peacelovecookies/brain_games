const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = (num) => num % 2 === 0;

const findGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return findGCD(b, a % b);
};

const hideElem = (progression, index) => progression.map((elem, i) => (i === index ? '..' : elem));

const makeProgression = (first, increment, count) => {
  const result = [first];
  let current = first;
  for (let i = 0; i < count - 1; i += 1) {
    result.push(current + increment);
    current += increment;
  }

  return result;
};

export {
  getRandomNum,
  isEven,
  findGCD,
  makeProgression,
  hideElem,
};
