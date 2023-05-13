'use client';

import { HangmanStoreProvider } from '@/store/hangman/hangman-store';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const GameLayout: FC<Props> = ({ children }) => {
  return <HangmanStoreProvider>{children}</HangmanStoreProvider>;
};

export default GameLayout;
