import { StudentsComponent } from './students/students.component';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {path: 'students', component: StudentsComponent},
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);