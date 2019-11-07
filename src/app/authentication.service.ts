import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user.model';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: Observable<User | null>;

  constructor( private router: Router ) {
    this.currentUser = Observable.of(null);
   }

   public login(email: string, password: string): Observable<boolean> {
     // todo NOT THE way to do authentication but it is my authentication service nonetheless.
     if ( email === 'chandlergegg@gmail.com' && password === 'csc436!') {
       return Observable.of(true);
     }
     return Observable.of(false)
   }

   public logout(): void {
     this.router.navigate(['/login'])
   }
}
