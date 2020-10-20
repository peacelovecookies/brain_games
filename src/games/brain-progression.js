import { getRandomNum, makeProgression, hideElem } from '../utils';

const task = 'What number is missing in the progression?';

const game = () => {
  const first = getRandomNum(-100, 100);
  const increment = getRandomNum(2, 20);
  const count = 10;
  const hiddenIndex = getRandomNum(0, count);
  const progression = makeProgression(first, increment, count);
  const progWithHiddenElem = hideElem(progression, hiddenIndex);

  const question = `What missed?\n${progWithHiddenElem.join(' ')} `;
  const correctAnswer = progression[hiddenIndex].toString();

  return { question, correctAnswer };
};

export { task, game };
