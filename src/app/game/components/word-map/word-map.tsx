'use client';

import { FC } from 'react';

import styles from './word-map.module.scss';

type Props = {
  wordMap: (string | null)[];
};

const WordMap: FC<Props> = ({ wordMap }) => {
  return (
    <p className={styles.wordMap}>
      {wordMap.map((char, index) => (
        <span key={index} className={styles.char}>
          {char === null ? '_' : char}
        </span>
      ))}
    </p>
  );
};

export { WordMap };
