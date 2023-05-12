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
        <svg
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          className={styles.cross}
        >
          <line stroke='currentColor' x1={0} y1={0} x2={100} y2={100} />
          <line stroke='currentColor' x1={0} y1={100} x2={100} y2={0} />
        </svg>
      )}
      {letter}
    </Button>
  );
};

export { LetterButton };
