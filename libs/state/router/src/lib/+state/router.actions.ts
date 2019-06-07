import { Action } from '@ngrx/store';
import { Entity } from './router.reducer';

export enum RouterActionTypes {
  LoadRouter = '[Router] Load Router',
  RouterLoaded = '[Router] Router Loaded',
  RouterLoadError = '[Router] Router Load Error'
}

export class LoadRouter implements Action {
  readonly type = RouterActionTypes.LoadRouter;
}

export class RouterLoadError implements Action {
  readonly type = RouterActionTypes.RouterLoadError;
  constructor(public payload: any) {}
}

export class RouterLoaded implements Action {
  readonly type = RouterActionTypes.RouterLoaded;
  constructor(public payload: Entity[]) {}
}

export type RouterAction = LoadRouter | RouterLoaded | RouterLoadError;

export const fromRouterActions = {
  LoadRouter,
  RouterLoaded,
  RouterLoadError
};
