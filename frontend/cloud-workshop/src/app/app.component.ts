import { Component } from '@angular/core';
import {AppService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alfred';
  AlfredResponse;

  constructor(private appSvc: AppService){
  }

  sendRequest(value): void
  {
    let x = this.appSvc.sendRequest(value);
    console.log(x);
    this.AlfredResponse = x;
  }

};
