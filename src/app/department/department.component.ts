import { Component, OnInit } from '@angular/core';
import {DepartmentService} from './department.service';
import {Department} from './department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Department[];
  selectedDepartment: Department;

  constructor(private departmentService: DepartmentService) { }

  getDepartments(): void {
    this.departmentService.getDepartmentList().then(departments => this.departments = departments);
  }

  onSelect(department: Department): void {
    this.selectedDepartment = department;
    console.log(this.selectedDepartment);
  }
  ngOnInit(): void {
    this.getDepartments();
  }

}
