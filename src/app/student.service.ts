import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Student } from './student';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  private url = 'students.json';

  constructor(private http: Http) { }

  getAll(): Observable<Student[]> {
       return this.http.get(this.url)
          .map((response: Response) => response.json());
  }

  get(id: number): Observable<Student> {
       return this.http.get(this.url)
          .map((response: Response) => {
              const students = response.json();
              for (const index in students) {
                if (students[index].Id === id) {
                  return students[index];
                }
              }
              return new Student();
          });
  };
}
