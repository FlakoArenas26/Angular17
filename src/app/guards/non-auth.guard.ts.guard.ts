import { CanActivateFn } from '@angular/router';

export const nonAuthGuardTsGuard: CanActivateFn = (route, state) => {
  return true;
};
