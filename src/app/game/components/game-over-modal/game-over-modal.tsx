import { FC } from 'react';

import { hangmanStoreSelectors, useHangmanStore } from '@/store/hangman';
import { Button, Icon, Modal } from '@/components';
import { HEALTH_PRICE } from '@/constants';

import styles from './game-over-modal.module.scss';

type Props = {
  handlePlayAgain: () => void;
};

const GameOverModal: FC<Props> = ({ handlePlayAgain }) => {
  const isOver = useHangmanStore(hangmanStoreSelectors.isOver);
  const isGuessed = useHangmanStore(hangmanStoreSelectors.isGuessed);
  const health = useHangmanStore(hangmanStoreSelectors.health);
  const word = useHangmanStore(hangmanStoreSelectors.word);

  const gotCoins = health * HEALTH_PRICE;

  return (
    <Modal
      isOpen={isOver}
      buttons={
        <>
          <Button href='/' size='large' variant='contained'>
            Go Home
          </Button>
          <Button size='large' variant='contained' onClick={handlePlayAgain}>
            Play Again
          </Button>
        </>
      }
      style={{
        textAlign: 'center',
        minHeight: 300,
      }}
    >
      <p className={styles.title}>Game Over</p>
      <p className={styles.subtite}>
        {isGuessed ? (
          <>
            You got {gotCoins} <Icon.Coin className={styles.coinIcon} />
          </>
        ) : (
          <>You lost. It was {word}</>
        )}
      </p>
    </Modal>
  );
};

export { GameOverModal };
