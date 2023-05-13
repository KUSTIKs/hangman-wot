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
      style={{
        width: '100%',
        maxWidth: '600px',
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
      <div className={styles.buttons}>
        <Button href='/' size='medium' variant='outlined'>
          Go Home
        </Button>
        <Button size='medium' variant='contained' onClick={handlePlayAgain}>
          Play Again
        </Button>
      </div>
    </Modal>
  );
};

export { GameOverModal };
