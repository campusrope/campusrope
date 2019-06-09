import { UserFromToken } from './user-from-token.model';

export interface User extends UserFromToken {
  createdAt: Date;
  updatedAt: Date;
}
