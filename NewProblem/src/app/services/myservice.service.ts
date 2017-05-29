import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }

  serviceCall(){
    alert('Shows alert');
  }

}
