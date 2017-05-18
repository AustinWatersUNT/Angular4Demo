import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private studentSevice: StudentService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.student = this.studentSevice.get(id);
  }

}
