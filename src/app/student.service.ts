import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable()
export class StudentService {

  private students: Student[] = [
       {Id: 1, Name: 'John Doe'},
       {Id: 2, Name: 'Jane Doe'}
  ];

  getAll(): Student[] {
     return this.students;
  }

  get(id: number) {
    for(const index in this.students) {
      if (this.students[index].Id === id) {
        return this.students[index];
      }
    }
    return null;
  }
}
