import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  isSignIn = true;
  authForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  toggleForm() {
    this.isSignIn = !this.isSignIn;
  }

  onFormSubmit() {
    if (this.authForm.valid) {
      if (this.isSignIn) {
        const password = localStorage.getItem(this.authForm.value['username']);
        password === this.authForm.value['password']
          ? (this.authService.isLoggedin = true)
          : '';

        return;
      }

      localStorage.setItem(
        this.authForm.value['username'],
        this.authForm.value['password']
      );
      this.authService.isLoggedin = true;
    }
  }
}
