import { Entity, RouterState } from './router.reducer';
import { routerQuery } from './router.selectors';

describe('Router Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRouterId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createRouter = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      router: {
        list: [
          createRouter('PRODUCT-AAA'),
          createRouter('PRODUCT-BBB'),
          createRouter('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Router Selectors', () => {
    it('getAllRouter() should return the list of Router', () => {
      const results = routerQuery.getAllRouter(storeState);
      const selId = getRouterId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedRouter() should return the selected Entity', () => {
      const result = routerQuery.getSelectedRouter(storeState);
      const selId = getRouterId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = routerQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = routerQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
