import { FC } from 'react';
import Link from 'next/link';

import { Icon } from '@/components';

import styles from './header.module.scss';

type Props = {
  coinCount: number | null;
};

const Header: FC<Props> = ({ coinCount }) => {
  return (
    <header>
      <div className={styles.container}>
        <Link href='/'>
          <Icon.Home size={37} />
        </Link>
        {typeof coinCount === 'number' && (
          <p className={styles.coins}>
            <Icon.Coin className={styles.coinIcon} size={37} />
            <span>{coinCount}</span>
          </p>
        )}
      </div>
    </header>
  );
};

export { Header };
