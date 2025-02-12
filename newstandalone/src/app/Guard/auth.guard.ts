import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)


  let path = route.url[0].path
  console.log("path:", path)
  if (route.url.length > 0) {
    if (path === 'customer1') {
      alert('you do not have access')
      // router.navigate(['about'])
      router.navigateByUrl('/')
      return false
    } else {
      return true
    }
  } else {
    return true
  }
};
