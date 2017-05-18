import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.studentService.get(id)
      .subscribe(student => this.student = student);
  }

  save() {
    if (this.student.Id) {
      this.studentService
        .put(this.student)
        .subscribe(() => this.router.navigate(['/students', this.student.Id]));
    } else {
      this.studentService
        .post(this.student)
        .subscribe(student => this.router.navigate(['/students', student.Id]));
    }
  }

  cancel() {
    if (this.student.Id) {
      this.router.navigate(['/students', this.student.Id]);
    } else {
      this.router.navigate(['/students']);
    }
  }
}
