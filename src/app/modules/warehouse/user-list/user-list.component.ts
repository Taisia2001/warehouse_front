import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) { }
users;
error;
  ngOnInit(): void {
    this.updateUsers();
  }
updateUsers() {
this.userService.getUsers().subscribe(response => {
  this.users = new Observable(observer => observer.next(response.body));
}, error => {
    alert(error.statusText);
  });
}
removeUser(id) {
this.userService.removeUser(id);
this.updateUsers();
}

setRole(user) {
if (user.role === 'User') {
  this.userService.editUser(user, 'Admin');
}
if (user.role === 'Admin') {
    this.userService.editUser(user, 'User');
  }
this.updateUsers();
  }

  getText(role) {
    if (role === 'User') {
      return 'change to Admin';
    }
    if (role === 'Admin') {
      return 'change to User';
    }
    if (role === 'SuperAdmin') {
      return role;
    }

  }
}
