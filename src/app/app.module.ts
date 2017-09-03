import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentService } from './department/department.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ DepartmentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
