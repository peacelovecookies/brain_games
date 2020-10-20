import readlineSync from 'readline-sync';
import { rounds, lives } from './config';

export default (task, game) => {
  console.log(task);
  const currentLives = [...lives];
  let currentRounds = rounds;
  for (let i = 0; i < currentRounds; i += 1) {
    if (currentLives.length === 0) {
      console.log('\nOh, no! You lost. Do you want to play one more time?'); // TODO: add play game again
      return;
    }

    console.log(`\nRound ${i + 1}`);
    console.log(`Your lives: ${currentLives.join(' ')}\n`);

    const { question, correctAnswer } = game();
    const answer = readlineSync.question(question);
    if (answer !== correctAnswer) {
      currentLives.pop();
      currentRounds += 1;
      console.log('\nSorry to say, but you made a mistake. Try again...');
    }
  }
  console.log('Congratulations, you win! You are, smart-ass!');
};
