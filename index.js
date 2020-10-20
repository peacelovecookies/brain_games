import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name, please?');

console.log(`Nice to meet you, ${name}. So, now let's play!`);