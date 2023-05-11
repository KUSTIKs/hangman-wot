import { create } from 'zustand';

import { INITIAL_HEALTH } from '@/constants';

import { HangmanState } from './hangman-store.types';

const useHangmanStore = create<HangmanState>((set, get) => ({
  word: '',
  triedLetters: [],
  initialHealth: INITIAL_HEALTH,
  wrongGuessesCount: 0,

  setWord: (word: string) => {
    set({
      word: word.toLowerCase(),
      wrongGuessesCount: 0,
      triedLetters: [],
    });
  },
  tryLetter: (letter: string) => {
    const isCorrect = get().word.includes(letter.toLowerCase());

    set((state) => ({
      triedLetters: [...state.triedLetters, letter.toLowerCase()],
      wrongGuessesCount: isCorrect
        ? state.wrongGuessesCount
        : state.wrongGuessesCount + 1,
    }));
  },
}));

export { useHangmanStore };
