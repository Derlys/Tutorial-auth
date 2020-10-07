import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {}
  loginGoogle(): void {
    this.service.loginGoogle().subscribe((res) => {
      console.log(res);
      return this.router.navigate(['/']);
    });
  }
}
