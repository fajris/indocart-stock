import { Component } from '@angular/core';
// import { Http, Headers, RequestOptions } from "@angular/http";
// import { Observable } from "rxjs/Observable";
import { DataService } from "./data.service";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasil;
  error;

  constructor(private data: DataService) {
    var body = JSON.stringify({
      "Token": environment.token
    });
    
    this.data.getInventoryList(body).subscribe(
      result => {
        this.hasil = result;
        // untuk filter
        // var test = this.hasil.filter(component => component['Category'] == 'BLADE');
        // console.log(test);
        // console.log(this.hasil);
      },
      error => this.error = error
    )

    // Get Inventory List 
    // this.http.post('https://indocarttest.dealpos.co.id/api/web/GetInventoryList', body, options)
    //   .subscribe(
    //     result => {
    //       // console.log(result.json());
    //       this.hasil = result.json();
    //     },
    //     error => {
    //       console.log(error);
    //     });

    // Get Inventory List Filter By Outlet Group
    // this.http.post('https://indocarttest.dealpos.co.id/api/web/GetInventoryListFilterByOutletGroup', body, options)
    //   .subscribe(
    //     result => {
    //       // console.log(result.json());
    //     },
    //     error => {
    //       console.log(error);
    //     });

    // Get Inventory List Group By Outlet
    // this.http.post('https://indocarttest.dealpos.co.id/api/web/GetInventoryListGroupByOutlet', body, options)
    //   .subscribe(
    //     result => {
    //       // console.log(result.json());
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }
}
