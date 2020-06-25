import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {}


  ngOnInit(): void {
  }

  login(name, password) {
    this.authService.login(name, password);
  }
  signup(name, password) {
    this.authService.signup(name, password);
  }

}
