import { FC, ReactNode, CSSProperties } from 'react';
import { clsx } from 'clsx';

import styles from './button.module.scss';

type Props = {
  children: ReactNode;
  variant?: 'outlined' | 'contained';
  size?: 'medium' | 'large';
  style?: CSSProperties;
};

const Button: FC<Props> = ({
  children,
  size = 'medium',
  variant = 'contained',
  style,
}) => {
  return (
    <button
      style={style}
      className={clsx(styles.button, {
        [styles.button_variant_outlined]: variant === 'outlined',
        [styles.button_variant_contained]: variant === 'contained',
        [styles.button_size_medium]: size === 'medium',
        [styles.button_size_large]: size === 'large',
      })}
    >
      {children}
    </button>
  );
};

export { Button };
