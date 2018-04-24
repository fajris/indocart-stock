import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getInventoryList(body) {
    return this.http.post('https://indocarttest.dealpos.co.id/api/web/GetInventoryList', body, this.httpOptions)
  }

}
