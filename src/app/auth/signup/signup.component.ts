import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private _auth: AuthService, private _router: Router) {}

  signUp = () => {
    if (this._auth.signUp()) {
      this._router.navigate(['notes']);
    }
  };
}
