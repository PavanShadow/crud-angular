import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: any;

  constructor(public empservice: EmployeeService, public router: Router) { }

  ngOnInit(): void {
    this.empservice.getEmployees().subscribe((res) => {
      this.employees = res;
    });
  }

  editEmp(id) {
    this.router.navigate(['/edit'], { queryParams: { EmpId: id } });
  }

  deleteEmp(id) {
    this.empservice.deleteEmployee(id).then((res) => {
      if (res) {
        window.confirm("Are u sure!!");
        location.reload();
      } else {
        console.log('delete error');
      }
    });
  }

}
