import { CanActivateFn } from '@angular/router';
import { UserService } from '../user.service';
export const guardGuard: CanActivateFn = (route, state) =>
{
  if(!inject(UserService).isLogged())

    return createUrlTreeFromSnapshot(route, ['/login']);
  return true;
};
