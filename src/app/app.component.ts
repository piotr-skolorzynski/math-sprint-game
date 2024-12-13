import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public title = 'Math Sprint Game';
  public isLoggedin = false;

  private router = inject(Router);
  private authService = inject(AuthService);

  public ngOnInit(): void {
    this.isLoggedin = this.authService.isLoggedin;
  }

  public redirect() {
    this.router.navigate(['/auth']);
  }
}
