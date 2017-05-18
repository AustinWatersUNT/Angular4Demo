import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent {

  @Input() student: Student;

}
