import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './login-button.html',
  styleUrl: './login-button.scss',
})
export class LoginButton {
  private auth = inject(AuthService);

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}
