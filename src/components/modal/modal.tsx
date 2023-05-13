'use client';

import { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './modal.module.scss';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  isOpen?: boolean;
  handleClose?: () => void;
  style?: CSSProperties;
};

const Modal: FC<Props> = ({ children, isOpen, handleClose, style }) => {
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
    <motion.div
      className={clsx(styles.overlay, {
        [styles.overlay_closed]: !isOpen,
      })}
      onClick={handleClose}
      transition={{
        type: 'spring',
        duration: 0.2,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modal}
        style={style}
        transition={{
          type: 'spring',
          duration: 0.5,
        }}
        initial={{ y: '-10vh' }}
        animate={{ y: 0 }}
        exit={{ y: '10vh' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );

  return createPortal(
    <AnimatePresence initial={false} onExitComplete={() => null} mode='wait'>
      {isOpen && modal}
    </AnimatePresence>,
    container
  );
};

export { Modal };
