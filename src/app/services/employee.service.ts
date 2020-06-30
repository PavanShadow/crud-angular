import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  readonly baseUrl = 'http://localhost:3000/employees';

  constructor(public http: HttpClient) { }


  public getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl);
  }

  public getAnEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + `/${id}`);
  }

  public async postEmployee(employee: Employee): Promise<any> {
    return this.http.post<any>(this.baseUrl, employee).toPromise();
  }

  public async updateEmployee(id: number, employee: Employee): Promise<any> {
    return this.http.put<any>(this.baseUrl + `/${id}`, employee).toPromise();
  }

  public async deleteEmployee(id: number): Promise<any> {
    return this.http.delete<any>(this.baseUrl + `/${id}`).toPromise();
  }

}
