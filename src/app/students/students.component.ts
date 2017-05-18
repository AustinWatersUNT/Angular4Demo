import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student: Student = new Student();
  students: Student[] = [];

  constructor() { }

  ngOnInit() { }

  clear() {
    this.student = new Student();
  }

  add() {
    this.students.push(this.student);
    this.clear();
  }
}
