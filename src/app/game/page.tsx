'use client';

import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

import { coinsStoreSelectors, useCoinsStore } from '@/store/coins';
import { hangmanStoreSelectors, useHangmanStore } from '@/store/hangman';
import { getRandomElement } from '@/utils';
import { HEALTH_PRICE } from '@/constants';
import { Header } from '@/widgets';

import { GameOverModal, Letters, Tank, WordMap } from './components';

import mapNames from '@/data/map-names.json';

import styles from './page.module.scss';
import { revealVariants } from '@/utils/framer-variants';

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
        <motion.div
          className={styles.contaier}
          initial='hidden'
          whileInView='visible'
          transition={{
            staggerChildren: 0.2,
          }}
          viewport={{ once: true }}
        >
          <motion.p className={styles.task} variants={revealVariants}>
            Guess the name of map
          </motion.p>
          <motion.div variants={revealVariants}>
            <WordMap wordMap={guessedWordMap} />
          </motion.div>
          <motion.div className={styles.interface} variants={revealVariants}>
            <Letters />
            <Tank />
          </motion.div>
        </motion.div>
      </main>
      <GameOverModal handlePlayAgain={updateWord} />
    </>
  );
};

export default Game;
