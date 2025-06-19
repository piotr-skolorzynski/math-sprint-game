import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { AuthService } from '@app/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  public isSignIn = true;
  public authForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  private authService = inject(AuthService);

  public toggleForm(): void {
    this.isSignIn = !this.isSignIn;
  }

  public onFormSubmit(): void {
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
