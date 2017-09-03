import {Injectable } from '@angular/core';

import { Department } from './department';
import { DEPARTMENTS } from './mock-departments';


@Injectable()
export class DepartmentService {
  getDepartmentList(): Promise<Department[]> {
    return Promise.resolve(DEPARTMENTS);
  }
}
