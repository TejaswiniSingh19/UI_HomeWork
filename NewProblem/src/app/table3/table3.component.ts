import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {
name:string;
age:number;
course:string;
  constructor() { }

  ngOnInit() {
    this.name="Lavakush",
    this.age=28,
    this.course='Btach',
    this.name="Teju",
    this.age=55,
    this.course="btech"
  }

}
