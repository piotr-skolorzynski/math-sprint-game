import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
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
    console.log(this.authForm);
  }
}
