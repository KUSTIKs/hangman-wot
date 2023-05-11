'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import { hangmanStoreSelectors, useHangmanStore } from '@/store/hangman';
import { ALPHABET, HEALTH_PRICE, INITIAL_HEALTH } from '@/constants';
import { getRandomElement, explode } from '@/utils';
import { LocalStorageKey } from '@/enums';

import { GameOverModal, Header, LetterButton, WordMap } from './components';

import TankImg from '@/assets/images/tank.svg';
import mapNames from '@/data/map-names.json';

import styles from './page.module.scss';

const Game = () => {
  const word = useHangmanStore(hangmanStoreSelectors.word);
  const health = useHangmanStore(hangmanStoreSelectors.health);
  const triedLetters = useHangmanStore(hangmanStoreSelectors.triedLetters);
  const guessedWordMap = useHangmanStore(hangmanStoreSelectors.guessedWordMap);
  const isGuessed = useHangmanStore(hangmanStoreSelectors.isGuessed);

  const tryLetter = useHangmanStore(hangmanStoreSelectors.tryLetter);
  const setWord = useHangmanStore(hangmanStoreSelectors.setWord);

  const tankRef = useRef<HTMLDivElement>(null);
  const [coinsCount, setCoinsCount] = useState<number | null>(null);

  const updateWord = useCallback(() => {
    const randomWord = getRandomElement(mapNames);
    setWord(randomWord);
  }, [setWord]);

  const handleTankExplode = () => {
    if (!tankRef.current) return;

    explode(tankRef.current);
  };

  useEffect(() => {
    if (!isGuessed) return;
    const gotCoins = health * HEALTH_PRICE;

    setCoinsCount((state) => (state || 0) + gotCoins);
  }, [health, isGuessed]);

  useEffect(() => {
    updateWord();
  }, [updateWord]);

  useEffect(() => {
    if (typeof coinsCount === 'number') {
      localStorage.setItem('coins', String(coinsCount));
    }
  }, [coinsCount]);

  useEffect(() => {
    const storedCoinsCount = Number(
      localStorage.getItem(LocalStorageKey.COINS)
    );

    setCoinsCount(storedCoinsCount || 0);
  }, []);

  useEffect(() => {
    return useHangmanStore.subscribe((state, prevState) => {
      if (state.wrongGuessesCount > prevState.wrongGuessesCount) {
        handleTankExplode();
      }
    });
  }, []);

  return (
    <>
      <Header coinCount={coinsCount} />
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
                  isCorrect={word.toLowerCase().includes(letter)}
                  isTried={triedLetters.includes(letter)}
                  onClick={() => tryLetter(letter)}
                />
              ))}
            </div>
            <div className={styles.tankSection}>
              <div className={styles.tank} ref={tankRef}>
                <Image src={TankImg} alt='tank' width={200} priority />
              </div>
              <p className={styles.health}>
                Health: {health}/{INITIAL_HEALTH}
              </p>
            </div>
          </div>
        </div>
      </main>
      <GameOverModal handlePlayAgain={updateWord} />
    </>
  );
};

export default Game;
