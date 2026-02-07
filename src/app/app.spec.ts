import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideAuth0({
          domain: environment.auth0.domain,
          clientId: environment.auth0.clientId,
          authorizationParams: {
            redirect_uri: window.location.origin,
          },
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
