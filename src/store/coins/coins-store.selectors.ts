import { CoinsStoreState } from './coins-store.state';

const coinsStoreSelectors = {
  coins: (state: CoinsStoreState) => state.coins,
  addCoins: (state: CoinsStoreState) => state.addCoins,
};

export { coinsStoreSelectors };
