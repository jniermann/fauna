import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginButton } from './login-button';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../../environments/environment';

describe('LoginButton', () => {
  let component: LoginButton;
  let fixture: ComponentFixture<LoginButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginButton],
      providers: [
        provideAuth0({
          domain: environment.auth0.domain,
          clientId: environment.auth0.clientId,
          authorizationParams: {
            redirect_uri: window.location.origin,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
