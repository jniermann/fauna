import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './logout-button.html',
  styleUrl: './logout-button.scss',
})
export class LogoutButton {
  private auth = inject(AuthService);

  logout(): void {
    this.auth.logout({ 
      logoutParams: { 
        returnTo: window.location.origin 
      } 
    });
  }
}
