import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { CoinsStoreState } from './coins-store.state';
import { LocalStorageKey } from '@/enums';

const useCoinsStore = create(
  persist<CoinsStoreState>(
    (set, get) => ({
      coins: 0,
      addCoins: (coins: number) => set({ coins: get().coins + coins }),
    }),
    {
      name: LocalStorageKey.COINS,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useCoinsStore };
