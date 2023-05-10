import Link from 'next/link';

import { Icon } from '@/components';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link href='/'>
          <Icon.Home size={37} />
        </Link>
        <p className={styles.coins}>
          <Icon.Coin className={styles.coinIcon} size={37} />
          <span>32</span>
        </p>
      </div>
    </header>
  );
};

export { Header };
