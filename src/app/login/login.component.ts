import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  // private subscriptions: Subscription[];

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService,
              private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(5)] ]
    });
  }

  public submit(): void {
    // TODO call auth service
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      if (this.auth.login(email, password)) {
        this.router.navigateByUrl('/dashboard');
      } else {
        //TODO failed login notice/message
        console.log(`Email: ${email} failed login`);
      }
    } else {
      console.log(`Email and/or provided password invalid`);
      // TODO provide notification of invalid email/password
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
