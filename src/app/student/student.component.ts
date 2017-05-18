import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

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

  delete() {
    this.studentService.delete(this.student.Id)
      .subscribe(() => this.router.navigate(['/students']));
  }

}
