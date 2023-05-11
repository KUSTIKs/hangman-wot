'use client';

import { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';

type Props = {
  children: ReactNode;
  buttons?: ReactNode;
  isOpen?: boolean;
  handleClose?: () => void;
  style?: CSSProperties;
};

const Modal: FC<Props> = ({
  children,
  buttons,
  isOpen,
  handleClose,
  style,
}) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const containerElement = document.getElementById('modal-root');

    if (!containerElement) {
      console.log('No container element found');
      return;
    }

    setContainer(containerElement);
  }, []);

  if (!container) {
    return null;
  }

  const modal = (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.container}>
        <div className={styles.modal} style={style}>
          {children}
        </div>
        {buttons && <div className={styles.buttons}>{buttons}</div>}
      </div>
    </div>
  );

  return createPortal(isOpen ? modal : null, container);
};

export { Modal };
