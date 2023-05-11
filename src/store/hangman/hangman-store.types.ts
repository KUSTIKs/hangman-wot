type HangmanState = {
  word: string;
  triedLetters: string[];
  initialHealth: number;
  wrongGuessesCount: number;

  setWord: (word: string) => void;
  tryLetter: (letter: string) => void;
};

export type { HangmanState };
