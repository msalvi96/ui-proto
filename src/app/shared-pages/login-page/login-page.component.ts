import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['/home']);
  }

}
