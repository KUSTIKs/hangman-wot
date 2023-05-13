'use client';

import { FC } from 'react';

import { Button } from '@/components';

import styles from './letter-button.module.scss';

type Props = {
  letter: string;
  onClick: () => void;
  isTried: boolean;
  isCorrect: boolean;
};

const LetterButton: FC<Props> = ({ letter, onClick, isTried, isCorrect }) => {
  return (
    <Button
      variant='outlined'
      size='medium'
      onClick={onClick}
      disabled={isTried}
      style={{
        fontSize: 20,
        height: 50,
        width: 50,
        textTransform: 'uppercase',
        overflow: 'hidden',
      }}
    >
      {!isCorrect && isTried && (
        <>
          <div className={styles.crossLine1} />
          <div className={styles.crossLine2} />
        </>
      )}
      {letter}
    </Button>
  );
};

export { LetterButton };
