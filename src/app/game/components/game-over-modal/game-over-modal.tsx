import { FC } from 'react';

import { Button, Icon, Modal } from '@/components';

import styles from './game-over-modal.module.scss';

type Props = {
  isOpen: boolean;
  isWin: boolean;
  gotCoins: number;
  handlePlayAgain: () => void;
};

const GameOverModal: FC<Props> = ({
  isWin,
  gotCoins,
  handlePlayAgain,
  isOpen,
}) => {
  return (
    <Modal
      isOpen={isOpen}
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
        {isWin ? (
          <>
            You got {gotCoins} <Icon.Coin className={styles.coinIcon} />
          </>
        ) : (
          <>You lost</>
        )}
      </p>
    </Modal>
  );
};

export { GameOverModal };
