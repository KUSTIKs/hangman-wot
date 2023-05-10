import Image from 'next/image';
import Link from 'next/link';

import TankImg from '@/assets/images/tank.svg';

import { Button } from '@/components';
import { Header } from './components';

import styles from './page.module.scss';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const Game = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.contaier}>
          <p className={styles.task}>Guess the name of map</p>
          <p className={styles.word}>A_______</p>
          <div className={styles.interface}>
            <div className={styles.buttons}>
              {ALPHABET.split('').map((letter) => (
                <Button key={letter} size='medium' variant='outlined'>
                  {letter}
                </Button>
              ))}
            </div>
            <div className={styles.tankSection}>
              <Image src={TankImg} alt='tank' width={200} />
              <p className={styles.health}>Health: 9/10</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Game;
