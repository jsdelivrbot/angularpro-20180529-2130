import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) {
    this.authService.handleAuth();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
