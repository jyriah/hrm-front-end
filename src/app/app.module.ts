import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentService } from './department/department.service';
import {RouterModule} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/departments',
        pathMatch: 'full'
      },
      {
        path: 'departments',
        component: DepartmentComponent
      },
      {
        path: 'employees',
        component: EmployeeComponent
      },
      {
        path: 'positions',
        component: PositionComponent
      }
    ])
  ],
  providers: [ DepartmentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
