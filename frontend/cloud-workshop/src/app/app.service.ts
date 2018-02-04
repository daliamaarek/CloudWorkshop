import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AppService {

  constructor(private http: Http) { }
  // private port = (process.env.VCAP_APP_PORT || 3000);
  // private host = (process.env.VCAP_APP_HOST|| "localhost");
  private port = 3000;
  private host = 'localhost';
  body = "ok";

  sendRequest(req) : any{
    console.log(JSON.stringify(req));
      return this.http.post('http://localhost:3000', {message: req})
      .toPromise()
      .then(data => {
        return data.json();
      })

  }

  getRequest(){
    console.log("get request!")
    return this.http.get('http://localhost:3000')
    .toPromise()
    .then(data => {
      return data.json()});
  }
}
