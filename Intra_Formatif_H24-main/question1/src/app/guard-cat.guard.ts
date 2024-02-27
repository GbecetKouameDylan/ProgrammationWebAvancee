
import {CanActivateFn, createUrlTreeFromSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../app/user.service";
import {USERS} from "./user";
export const guardCatGuard: CanActivateFn = (route, state) => {

  if(inject(UserService).currentUser == USERS[2])



    return createUrlTreeFromSnapshot(route, ['/dog']);
  else

  return true;
};
