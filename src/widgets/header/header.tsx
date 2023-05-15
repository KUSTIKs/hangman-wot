'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { coinsStoreSelectors, useCoinsStore } from '@/store/coins';
import { Icon } from '@/components';

import LogoImg from '@/assets/images/logo.svg';

import styles from './header.module.scss';

const Header: FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  const coins = useCoinsStore(coinsStoreSelectors.coins);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <Image src={LogoImg} alt='logo' height={26} draggable={false} />
        </Link>
        {isHydrated && (
          <div className={styles.coins}>
            <Icon.Coin className={styles.coinIcon} size='1.2em' />
            {coins}
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
