import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  readonly baseUrl = 'http://localhost:3000/admins';

  constructor(public http: HttpClient, public router: Router) { }

  public async loginAdmin(admin: Admin): Promise<any> {
    return this.http.post<any>(this.baseUrl, admin).subscribe((data) => {
      if (data.status === 'Success') {
        this.router.navigate(['/home/add']);
      } else {
        alert('Login error');
      }

    });
  }

}
