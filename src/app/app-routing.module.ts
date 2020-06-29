import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
  {
    path: 'home',
    component: EmployeeComponent,
    children: [
      {
        path: 'add',
        component: EmployeeAddComponent

      },
      {
        path: 'edit',
        component: EmployeeEditComponent,

      },
    ]
  },
  {
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
