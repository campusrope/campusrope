import { createSelector } from '@ngrx/store';
import { AuthState } from '@campusrope/state/auth';

export const getAuthenticatedUser = createSelector(
  AuthState.getUserId,
  (userId, entities) => userId && entities[userId],
);

export const getAuthenticatedUserLoading = createSelector(
  AuthState.getUserId,
  getAuthenticatedUser,
  (userId, user) => userId && !user,
);