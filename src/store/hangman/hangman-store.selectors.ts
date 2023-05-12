import { ALPHABET } from '@/constants';
import { HangmanState } from './hangman-store.types';

const hangmanStoreSelectors = {
  word: (state: HangmanState) => state.word,
  triedLetters: (state: HangmanState) => state.triedLetters,
  initialHealth: (state: HangmanState) => state.initialHealth,
  wrongGuessesCount: (state: HangmanState) => state.wrongGuessesCount,
  setWord: (state: HangmanState) => state.setWord,
  tryLetter: (state: HangmanState) => state.tryLetter,

  isGuessed: (state: HangmanState) => {
    return (
      state.word && !hangmanStoreSelectors.guessedWordMap(state).includes(null)
    );
  },
  isLost: (state: HangmanState) => {
    return state.wrongGuessesCount >= state.initialHealth;
  },
  isOver: (state: HangmanState) => {
    return (
      hangmanStoreSelectors.isGuessed(state) ||
      hangmanStoreSelectors.isLost(state)
    );
  },
  health: (state: HangmanState) => {
    return state.initialHealth - state.wrongGuessesCount;
  },
  guessedWordMap: (state: HangmanState) => {
    return [...state.word].map((char) => {
      const isLetter = ALPHABET.includes(char);
      const isGuessed = state.triedLetters.includes(char);

      if (!isLetter || isGuessed) {
        return char;
      }

      return null;
    });
  },
};

export { hangmanStoreSelectors };
