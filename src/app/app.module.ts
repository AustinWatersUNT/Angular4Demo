import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppRouting } from './app.routes';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
