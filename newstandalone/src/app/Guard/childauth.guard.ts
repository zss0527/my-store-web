import { CanActivateChildFn } from '@angular/router';

export const childauthGuard: CanActivateChildFn = (childRoute, state) => {

  console.log('childRoute:', childRoute)
  const path = childRoute.url[0].path
  if (path === 'add') {
    alert('you do not have access!')
    return false
  }
  return true;
};
