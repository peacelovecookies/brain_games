import { getRandomNum } from '../utils';

const task = 'What is the result of the expression?';

const operators = ['*', '+', '-'];
const operations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const game = () => {
  const a = getRandomNum(1, 100);
  const b = getRandomNum(1, 100);
  const index = getRandomNum(0, operators.length);

  const operator = operators[index];
  const operation = operations[operator];

  const question = `Solve this problem: ${a} ${operator} ${b} `;
  const correctAnswer = operation(a, b).toString();

  return { question, correctAnswer };
};

export { task, game };
