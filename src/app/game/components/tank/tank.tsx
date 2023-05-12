import { useEffect, useRef } from 'react';
import Image from 'next/image';

import { hangmanStoreSelectors, useHangmanStore } from '@/store/hangman';
import { INITIAL_HEALTH } from '@/constants';
import { explode } from '@/utils';

import TankImg from '@/assets/images/tank.png';

import styles from './tank.module.scss';

const Tank = () => {
  const health = useHangmanStore(hangmanStoreSelectors.health);

  const tankWrapperRef = useRef<HTMLDivElement>(null);

  const handleTankExplode = () => {
    if (!tankWrapperRef.current) return;

    explode(tankWrapperRef.current);
  };

  useEffect(() => {
    return useHangmanStore.subscribe((state, prevState) => {
      if (state.wrongGuessesCount > prevState.wrongGuessesCount) {
        handleTankExplode();
      }
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={tankWrapperRef}>
        <Image
          src={TankImg}
          alt='tank'
          height={350}
          width={350}
          className={styles.tankImage}
          priority
          draggable={false}
        />
      </div>
      <p className={styles.health}>
        Health: {health}/{INITIAL_HEALTH}
      </p>
    </div>
  );
};

export { Tank };
