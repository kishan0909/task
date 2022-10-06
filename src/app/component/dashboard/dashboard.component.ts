import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productData:any;
  constructor(private getS:GetDataService) { }

  ngOnInit(): void {
    this.getS.getFromDb().subscribe((res)=>{
      console.log(res)
      this.productData = [...res]
    },(err)=>{
      console.log(err)
    })
  }

}
