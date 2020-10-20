import readlineSync from 'readline-sync';

export default () => {
  console.log('\n Welcome to the Brain Games!\n');

  const name = readlineSync.question('May I have your name, please? ');
  console.log(`Nice to meet you, ${name}. So, now let's play!`);
};
