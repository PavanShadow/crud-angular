import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Admin } from '../../models/admin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  admin: Admin;

  constructor(public authservice: AuthService) { }

  loginForm = new FormGroup({
    uname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  login(formValue: Admin): void {
    this.authservice.loginAdmin(formValue);
  }

}
