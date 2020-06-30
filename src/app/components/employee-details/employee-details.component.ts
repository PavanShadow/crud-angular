import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: Employee;

  constructor(public empservice: EmployeeService, public router: Router) { }

  ngOnInit(): void {
    this.empservice.getEmployees().subscribe((res) => {
      this.employees = res;
    });
  }

  editEmp(id: number): void {
    this.router.navigate(['/home/edit'], { queryParams: { EmpId: id } });
  }

  deleteEmp(id: number): void {
    this.empservice.deleteEmployee(id).then((res) => {
      if (res.status === 'Success') {
        // console.log(res);
        location.reload();
      } else {
        console.log('delete error');
      }
    });
  }

}
