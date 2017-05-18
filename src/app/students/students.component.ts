import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAll()
      .subscribe(students => this.students = students);
  }

  delete(student: Student, index: number) {
    this.studentService.delete(student.Id)
      .subscribe(() => this.students.splice(index, 1));
  }

}
