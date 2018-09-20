import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string | object;

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.error = 'Please enter a valid pseudo and password';
      return;
    }

    this.auth.login({
      strategy: 'local',
      email: form.value.email,
      password: form.value.password,
    })
      .then(() => {
        this.router.navigate(['/news']);
      })
      .catch(err => {
        this.error = err;
      });
  }

  onCreateAccount(form: NgForm) {
    if (!form.valid) {
      this.error = 'Please enter a pseudo and password';
      return;
    }
        this.auth.register({
          email: form.value.email,
          password: form.value.password
        })
        .then(() => {
          this.auth.login({
            strategy: 'local',
            email: form.value.email,
            password: form.value.password,
          })
            .then(() => {
              this.router.navigate(['/news']);
            })
            .catch(err => {
              this.error = err;
            });
        })
      .catch(err => this.error = err);
  }
}
