import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButton } from './login-button/login-button';
import { LogoutButton } from './logout-button/logout-button';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, LoginButton, LogoutButton, MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Fauna';
  protected auth = inject(AuthService);
}
