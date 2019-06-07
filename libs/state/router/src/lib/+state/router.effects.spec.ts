import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { RouterEffects } from './router.effects';
import { LoadRouter, RouterLoaded } from './router.actions';

describe('RouterEffects', () => {
  let actions: Observable<any>;
  let effects: RouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        RouterEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(RouterEffects);
  });

  describe('loadRouter$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadRouter() });
      expect(effects.loadRouter$).toBeObservable(
        hot('-a-|', { a: new RouterLoaded([]) })
      );
    });
  });
});
