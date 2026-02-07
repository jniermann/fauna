import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutButton } from './logout-button';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../../environments/environment';

describe('LogoutButton', () => {
  let component: LogoutButton;
  let fixture: ComponentFixture<LogoutButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutButton],
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

    fixture = TestBed.createComponent(LogoutButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
