import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, take, tap} from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { isScheduler } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class ChatauthGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService,
    private router: Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      // todo not sure about instructions ... removed authentication but still have login.
      // todo  Looks like no one is authorized because of the guard.  I'm just redirecting them to login
    if (this.auth.isUser('chandlergegg@gmail.com')) {
      return Observable.of(true);
    }
    return Observable.of(false);
  }

}
