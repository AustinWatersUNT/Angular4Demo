import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Student } from './student';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  private url = 'http://eduapi.apphb.com/api/students';

  constructor(private http: Http) { }

  getAll(): Observable<Student[]> {
    return this.http.get(this.url)
      .map((response: Response) => response.json() as Student[]);
  }

  get(id: number): Observable<Student> {
    return this.http.get(`${this.url}/${id}`)
      .map((response: Response) => response.json() as Student);
  }

  post(student: Student): Observable<Student> {
    return this.http.post(this.url, student)
      .map((response: Response) => response.json() as Student);
  }

  put(student: Student): Observable<Response> {
    return this.http.put(`${this.url}/${student.Id}`, student);
  }

  delete(studentId: number): Observable<Response> {
    return this.http.delete(`${this.url}/${studentId}`);
  }
}
