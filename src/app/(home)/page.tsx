'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { revealVariants } from '@/utils/framer-variants';
import { Button } from '@/components';
import { Header } from '@/widgets';

import TankImg from '@/assets/images/tank.png';

import styles from './page.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <motion.div
          className={styles.container}
          initial='hidden'
          whileInView='visible'
          transition={{
            staggerChildren: 0.2,
          }}
          viewport={{ once: true }}
        >
          <motion.div className={styles.tankWrapper} variants={revealVariants}>
            <Image
              src={TankImg}
              alt='tank'
              height={200}
              priority
              draggable={false}
            />
          </motion.div>
          <motion.h1 className={styles.title} variants={revealVariants}>
            Guess the name of a World of Tanks map
          </motion.h1>
          <motion.div variants={revealVariants}>
            <Button
              size='large'
              variant='contained'
              style={{ minWidth: 250 }}
              href='/game'
            >
              Play
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
