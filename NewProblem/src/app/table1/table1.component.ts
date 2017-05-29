import { Component, OnInit } from '@angular/core';
import { MyserviceService } from "app/services/myservice.service";


@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})

export class Table1Component implements OnInit {

  constructor(private abc: MyserviceService) { }

  onClick(){
  //alert("Show alert message");
  this.abc.serviceCall();
  }

  ngOnInit() {
  }

}
