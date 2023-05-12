import { FC } from 'react';

import { hangmanStoreSelectors, useHangmanStore } from '@/store/hangman';
import { ALPHABET } from '@/constants';

import { LetterButton } from '../letter-button';

import styles from './letters.module.scss';

const Letters: FC = () => {
  const word = useHangmanStore(hangmanStoreSelectors.word);
  const triedLetters = useHangmanStore(hangmanStoreSelectors.triedLetters);
  const tryLetter = useHangmanStore(hangmanStoreSelectors.tryLetter);

  return (
    <div>
      <h3 className={styles.title}>Choose a letter:</h3>
      <div className={styles.buttons}>
        {[...ALPHABET].map((letter) => (
          <LetterButton
            letter={letter}
            key={letter}
            isCorrect={word.toLowerCase().includes(letter)}
            isTried={triedLetters.includes(letter)}
            onClick={() => tryLetter(letter)}
          />
        ))}
      </div>
    </div>
  );
};

export { Letters };
