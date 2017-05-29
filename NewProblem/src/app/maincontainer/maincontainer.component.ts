import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {
  tab1:number=4;
  tab2:number=0;
  tab3:number=0;

  constructor(private router: Router) { }

  ngOnInit() {
    //if(this.tab1>this.tab2){
      //this.router.navigate(['/table3']);
    //}
  }

}
