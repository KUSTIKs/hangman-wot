import Image from 'next/image';

import { Button } from '@/components';
import { Header } from '@/widgets';

import TankImg from '@/assets/images/tank.png';

import styles from './page.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.tankWrapper}>
            <Image
              src={TankImg}
              alt='tank'
              height={200}
              priority
              draggable={false}
            />
          </div>
          <h1 className={styles.title}>
            Guess the name of a World of Tanks map
          </h1>
          <div className={styles.buttons}>
            <Button
              size='large'
              variant='contained'
              style={{ minWidth: 250 }}
              href='/game'
            >
              Play
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
