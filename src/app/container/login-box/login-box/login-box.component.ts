import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrl: './login-box.component.scss'
})

export class LoginBoxComponent {

  router: Router = inject(Router);

  onLoginButtonClicked() {
    this.router.navigate(['login']);
  }

}
