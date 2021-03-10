import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RactiveGuard implements CanActivate {
  constructor( public rter: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      if ( localStorage.getItem('token') === 'verified'){
        // alert('authhhhhhhhhh');
        // this.rter.navigate(['/dashbord']);
      }else{
       alert('fffffffff')
       this.rter.navigate(['/login']);
      }
      // this.rter.navigate([ '/dashbord' ]);

      return true;
 }
}
@Injectable({
  providedIn: 'root'
})
export class NonRactiveGuard implements CanActivate {
  constructor( public rter: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      if ( localStorage.getItem('token') != 'verified'){
        // alert('authhhhhhhhhh');
        return true;
        // this.rter.navigate(['/dashbord']);
      }else{
      //  alert('fffffffff')
       
      return false;
      }
      // this.rter.navigate([ '/dashbord' ]);

 }
}
