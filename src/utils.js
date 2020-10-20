const getRandomNum = (min, max) => Math.random() * (max - min) + min;

const isEven = (num) => num % 2 === 0;

export { getRandomNum, isEven };
