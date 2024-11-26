import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
    imports: [RouterModule],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Math Sprint Game';
  isLoggedin = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedin = this.authService.isLoggedin;
  }

  redirect() {
    this.router.navigate(['/auth']);
  }
}
