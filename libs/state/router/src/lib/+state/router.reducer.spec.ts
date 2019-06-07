import { RouterLoaded } from './router.actions';
import {
  RouterState,
  Entity,
  initialState,
  routerReducer
} from './router.reducer';

describe('Router Reducer', () => {
  const getRouterId = it => it['id'];
  let createRouter;

  beforeEach(() => {
    createRouter = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Router actions ', () => {
    it('should return set the list of known Router', () => {
      const routers = [
        createRouter('PRODUCT-AAA'),
        createRouter('PRODUCT-zzz')
      ];
      const action = new RouterLoaded(routers);
      const result: RouterState = routerReducer(initialState, action);
      const selId: string = getRouterId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = routerReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
