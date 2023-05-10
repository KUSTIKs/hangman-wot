import { FC, ReactNode, CSSProperties } from 'react';
import { clsx } from 'clsx';

import styles from './button.module.scss';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  variant?: 'outlined' | 'contained';
  size?: 'medium' | 'large';
  style?: CSSProperties;
  href?: string;
};

const Button: FC<Props> = ({
  children,
  size = 'medium',
  variant = 'contained',
  style,
  href,
}) => {
  const isLink = typeof href === 'string';

  const className = clsx(styles.button, {
    [styles.button_variant_outlined]: variant === 'outlined',
    [styles.button_variant_contained]: variant === 'contained',
    [styles.button_size_medium]: size === 'medium',
    [styles.button_size_large]: size === 'large',
  });

  if (isLink) {
    return (
      <Link style={style} className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button style={style} className={className}>
      {children}
    </button>
  );
};

export { Button };
