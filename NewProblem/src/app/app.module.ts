import { routing } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
import { Table4Component } from './table4/table4.component';
import { MyserviceService } from "app/services/myservice.service";

@NgModule({
  declarations: [
    AppComponent,
    MaincontainerComponent,
    Table1Component,
    Table2Component,
    Table3Component,
    Table4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
