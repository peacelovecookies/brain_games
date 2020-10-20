import { getRandomNum, findGCD } from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const a = getRandomNum(1, 100);
  const b = getRandomNum(2, 100);

  const question = `What GCD of ${a} and ${b} `;
  const correctAnswer = findGCD(a, b).toString();

  return { question, correctAnswer };
};

export { task, game };
