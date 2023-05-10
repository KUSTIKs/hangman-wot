import Image from 'next/image';

import { Button } from '@/components';
import TankImg from '@/assets/images/tank.svg';

import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image src={TankImg} alt='tank' height={150} />
        <h1 className={styles.title}>Guess the name of a World of Tanks map</h1>
        <Button size='large' variant='contained' style={{ minWidth: 250 }}>
          Play
        </Button>
      </div>
    </main>
  );
};

export default Home;
