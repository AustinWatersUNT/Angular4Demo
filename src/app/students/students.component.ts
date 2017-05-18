import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  name: string;
  names: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.name = null;
  }

  add() {
    this.names.push(this.name);
    this.clear();
  }
}
