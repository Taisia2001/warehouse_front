import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm: FormGroup;

  constructor(public authService: AuthService,
              public router: Router
   /* private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public authService: AuthService*/
  ) {}


  ngOnInit(): void {

    // reset login status
   /* this.authService.logout();

    this.loginForm = this.fb.group({
      'username': new FormControl(null, []),
      'password': new FormControl(null, []),
    });*/

  }

  login(name, password) {
    this.authService.login(name, password);
  }
  signup(name, password) {
    this.authService.signup(name, password);
  }

}
