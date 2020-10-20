import readlineSync from 'readline-sync';
import { rounds, lives } from '../config';

export default (task, game) => {
  console.log(task);
  const currentLives = [...lives];
  for (let i = 0; i < rounds; i += 1) {
    console.log(`Your lives: ${lives.join(' ')}\n`);

    const { question, correctAnswer } = game();
    const answer = readlineSync.question(question);
    if (answer !== correctAnswer) {
      currentLives.pop();
      console.log('Sorry to say, but you made a mistake. Try again...');
    }
    if (currentLives.length === 0) {
      console.log('You lost. Do you want to play one more time?'); // TODO: add play game again
    }
  }
  console.log('Congratulations, you are, smart-ass!');
};
