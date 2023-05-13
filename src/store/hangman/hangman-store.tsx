import { ReactNode, createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';

import { INITIAL_HEALTH } from '@/constants';

import { HangmanState } from './hangman-store.types';

const hangmanStore = createStore<HangmanState>((set, get) => ({
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

const HangmanContext = createContext({} as typeof hangmanStore);
const HangmanStoreProvider = ({ children }: { children: ReactNode }) => (
  <HangmanContext.Provider value={hangmanStore}>
    {children}
  </HangmanContext.Provider>
);
const useHangmanStore = <T,>(selector: (state: HangmanState) => T) =>
  useStore(useContext(HangmanContext), selector);

export { HangmanStoreProvider, useHangmanStore };
