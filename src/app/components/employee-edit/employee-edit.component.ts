import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  constructor(public empservice: EmployeeService, public route: ActivatedRoute) { }

  employee: Employee;

  employeeEditForm = new FormGroup({
    eid: new FormControl(''),
    ename: new FormControl(''),
    ecity: new FormControl(''),
    esalary: new FormControl('')
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const eid = params.EmpId;
      this.empservice.getAnEmployee(eid).subscribe((res) => {
        this.employee = res;
        this.employeeEditForm.get('eid').setValue(res[0].EmpId);
        this.employeeEditForm.get('ename').setValue(res[0].EmpName);
        this.employeeEditForm.get('ecity').setValue(res[0].EmpCity);
        this.employeeEditForm.get('esalary').setValue(res[0].EmpSalary);
      });
    });

  }

  editEmployee(formValue: Employee): void {
    if (this.employeeEditForm.valid) {
      this.empservice.updateEmployee(this.employee[0].EmpId, formValue).then((res) => {
        if (res.status === 'Success') {
          alert('Updated');
        } else {
          console.log('update error');
        }
      });

    }
  }

}
