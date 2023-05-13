'use client';

import { useCallback, useEffect } from 'react';

import { coinsStoreSelectors, useCoinsStore } from '@/store/coins';
import { hangmanStoreSelectors, useHangmanStore } from '@/store/hangman';
import { getRandomElement } from '@/utils';
import { HEALTH_PRICE } from '@/constants';
import { Header } from '@/widgets';

import { GameOverModal, Letters, Tank, WordMap } from './components';

import mapNames from '@/data/map-names.json';

import styles from './page.module.scss';
import { HangmanStoreProvider } from '@/store/hangman/hangman-store';

const Game = () => {
  const health = useHangmanStore(hangmanStoreSelectors.health);
  const guessedWordMap = useHangmanStore(hangmanStoreSelectors.guessedWordMap);
  const isGuessed = useHangmanStore(hangmanStoreSelectors.isGuessed);
  const setWord = useHangmanStore(hangmanStoreSelectors.setWord);

  const addCoins = useCoinsStore(coinsStoreSelectors.addCoins);

  const updateWord = useCallback(() => {
    const randomWord = getRandomElement(mapNames);
    setWord(randomWord);
  }, [setWord]);

  useEffect(() => {
    if (!isGuessed) return;
    const gotCoins = health * HEALTH_PRICE;

    addCoins(gotCoins);
  }, [addCoins, health, isGuessed]);

  useEffect(() => {
    updateWord();
  }, [updateWord]);

  return (
    <>
      <Header />
      <main>
        <div className={styles.contaier}>
          <p className={styles.task}>Guess the name of map</p>
          <WordMap wordMap={guessedWordMap} />
          <div className={styles.interface}>
            <Letters />
            <Tank />
          </div>
        </div>
      </main>
      <GameOverModal handlePlayAgain={updateWord} />
    </>
  );
};

export default Game;
