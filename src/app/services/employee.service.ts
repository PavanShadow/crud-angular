

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  readonly baseUrl = 'http://localhost:3000/employees';

  constructor(public http: HttpClient) { }


  public getEmployees() {
    return this.http.get(this.baseUrl);
  }

  public getAnEmployee(id: number) {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  public async postEmployee(employee: Employee) {
    return await this.http.post(this.baseUrl, employee).subscribe();
  }

  public async updateEmployee(id: number, employee: Employee) {
    return await this.http.put(this.baseUrl + `/${id}`, employee).subscribe();
  }

  public async deleteEmployee(id: number) {
    return await this.http.delete(this.baseUrl + `/${id}`).subscribe();
  }

}
