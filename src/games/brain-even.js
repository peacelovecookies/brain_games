import { getRandomNum, isEven } from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';
const game = () => {
  const num = getRandomNum(1, 100);
  const question = `Is ${num} even? `;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export { task, game };
