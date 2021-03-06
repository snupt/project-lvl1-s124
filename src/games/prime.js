import { cons } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomInt from '../random-integer';

const rules = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const makeQA = () => {
  const question = makeRandomInt(1, 99);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
