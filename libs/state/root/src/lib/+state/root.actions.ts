import { Action } from '@ngrx/store';
import { Entity } from './root.reducer';

export enum RootActionTypes {
  LoadRoot = '[Root] Load Root',
  RootLoaded = '[Root] Root Loaded',
  RootLoadError = '[Root] Root Load Error'
}

export class LoadRoot implements Action {
  readonly type = RootActionTypes.LoadRoot;
}

export class RootLoadError implements Action {
  readonly type = RootActionTypes.RootLoadError;
  constructor(public payload: any) {}
}

export class RootLoaded implements Action {
  readonly type = RootActionTypes.RootLoaded;
  constructor(public payload: Entity[]) {}
}

export type RootAction = LoadRoot | RootLoaded | RootLoadError;

export const fromRootActions = {
  LoadRoot,
  RootLoaded,
  RootLoadError
};
