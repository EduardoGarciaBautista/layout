import { Component, OnInit } from '@angular/core';
import {UserService} from "../core/services/user.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.getUsers();
  }

  ngOnInit(): void {

  }

}
