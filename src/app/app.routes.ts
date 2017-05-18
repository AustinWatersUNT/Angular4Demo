import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'students/:id', component: StudentComponent}
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);