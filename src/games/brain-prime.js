import { getRandomNum, isPrime } from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const num = getRandomNum(1, 1000);

  const question = `Is ${num} prime? `;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export { task, game };
