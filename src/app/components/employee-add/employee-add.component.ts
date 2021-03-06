import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  constructor(public empservice: EmployeeService) { }


  employeeForm = new FormGroup({
    eid: new FormControl('', Validators.required),
    ename: new FormControl('', Validators.required),
    ecity: new FormControl('', Validators.required),
    esalary: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  addEmployee(formValue: Employee): void {
    if (this.employeeForm.valid) {
      this.empservice.postEmployee(formValue).then((res) => {
        if (res.status === 'Success') {
          alert('Success');
        }
      });
      this.employeeForm.reset();
    } else {
      console.log('error');
    }
  }

}
