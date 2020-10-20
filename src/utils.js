const getRandomNum = (floor, ceil) => Math.floor(Math.random() * ceil) + floor;

const isEven = (num) => num % 2 === 0;

export { getRandomNum, isEven };
