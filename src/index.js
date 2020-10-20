import readlineSync from 'readline-sync';
import fs from 'fs';

const games = fs.readdirSync(`${__dirname}/bin/`)
  .map((filename) => filename.slice(0, -3))
  .filter((game) => game !== 'brain-games');

export default () => {
  console.log('\n Welcome to the Brain Games!\n');

  const name = readlineSync.question('May I have your name, please? ');
  console.log(`Nice to meet you, ${name}. Now let's play!\n`);

  console.log(`Pick your game:\n ${games.join('\n')}`); // TODO: add possibility of picking game right from terminal
};
