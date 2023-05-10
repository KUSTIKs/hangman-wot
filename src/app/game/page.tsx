'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ALPHABET, INITIAL_HEALTH } from '@/constants';
import { getRandomElement } from '@/utils';

import { Header, LetterButton, WordMap } from './components';

import TankImg from '@/assets/images/tank.svg';
import mapNames from '@/data/map-names.json';

import styles from './page.module.scss';

const Game = () => {
  const [hiddenWord, setHiddenWord] = useState(getRandomElement(mapNames));
  const [health, setHealth] = useState(INITIAL_HEALTH);
  const [triedLetters, setTriedLetters] = useState<string[]>([]);
  const guessedWordMap = [...hiddenWord].map((char) => {
    const isLetter = ALPHABET.includes(char.toLowerCase());
    const isTried = triedLetters.includes(char.toLowerCase());

    if (!isLetter || isTried) {
      return char;
    }

    return null;
  });

  const isGuessed = guessedWordMap.every((char) => char !== null);
  const isLost = health <= 0;
  const isGameOver = isGuessed || isLost;

  const handleLetterClick = (letter: string) => {
    if (isGameOver) return;

    if (!hiddenWord.includes(letter)) {
      setHealth((state) => state - 1);
    }

    setTriedLetters([...triedLetters, letter]);
  };

  useEffect(() => {
    if (isGuessed) {
      alert('You won!');
    } else if (isLost) {
      alert('You lost!');
    }
  }, [isGuessed, isLost]);

  return (
    <>
      <Header />
      <main>
        <div className={styles.contaier}>
          <p className={styles.task}>Guess the name of map</p>
          <WordMap wordMap={guessedWordMap} />
          <div className={styles.interface}>
            <div className={styles.buttons}>
              {[...ALPHABET].map((letter) => (
                <LetterButton
                  letter={letter}
                  key={letter}
                  isCorrect={hiddenWord.toLowerCase().includes(letter)}
                  isTried={triedLetters.includes(letter)}
                  onClick={() => handleLetterClick(letter)}
                />
              ))}
            </div>
            <div className={styles.tankSection}>
              <Image src={TankImg} alt='tank' width={200} />
              <p className={styles.health}>
                Health: {health}/{INITIAL_HEALTH}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Game;
