import { Entity, RootState } from './root.reducer';
import { rootQuery } from './root.selectors';

describe('Root Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRootId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createRoot = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      root: {
        list: [
          createRoot('PRODUCT-AAA'),
          createRoot('PRODUCT-BBB'),
          createRoot('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Root Selectors', () => {
    it('getAllRoot() should return the list of Root', () => {
      const results = rootQuery.getAllRoot(storeState);
      const selId = getRootId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedRoot() should return the selected Entity', () => {
      const result = rootQuery.getSelectedRoot(storeState);
      const selId = getRootId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = rootQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = rootQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
