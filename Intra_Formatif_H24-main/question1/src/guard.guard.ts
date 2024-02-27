import {CanActivateFn, createUrlTreeFromSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../src/app/user.service";
export const guardGuard: CanActivateFn = (route, state) =>
{
  if(!inject(UserService).currentUser)

    return createUrlTreeFromSnapshot(route, ['/login']);
  else



  return true;



};
