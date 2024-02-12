import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';

export const apiGuard: CanActivateFn = (route, state) => {
  let sweet = localStorage.getItem("sweet");
  let salty = localStorage.getItem("salty");

  if(!sweet && !salty)
    return createUrlTreeFromSnapshot(route, ['/eau']);
  if(sweet && !salty)
    return createUrlTreeFromSnapshot(route, ['/bonbon']);
  if(!sweet && salty)
    return createUrlTreeFromSnapshot(route, ['/sel']);
  else
    return true;
};
