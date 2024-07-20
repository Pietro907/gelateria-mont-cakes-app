import { CanActivateFn} from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  //se non si è loggati non si puoò accedere alla rotta
  const auth = inject(AuthService);
  if(!auth.isAuthLogger()){
    return false
  }
  return true;
};

