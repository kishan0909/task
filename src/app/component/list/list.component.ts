import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from '../../../assets/data.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productData:any=[];
  model:any=[];
  price:any=[];
  hdd:any=[];
  ram:any=[];
  location:any=[];
  filterArr:any=[];
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    var temp;
    temp = Object.assign({...data});
    for(let i=0; i<temp.length;i++){
      this.productData.push(temp[i])
    }
    this.filterArr = this.productData;
    this.productData.filter((x:any)=>{
      this.model.push(x.Model)
      this.location.push(x.Location) 
    })
    const dupRem = new Set(this.location)
    this.location = Array.from(dupRem)
  }

  filterDataStorage(event:any){
    this.filterArr = [];
    this.productData.filter((x:any)=>{
      if(x.HDD.includes(event)){
        this.filterArr.push(x)
      }
    })
  }

  filterDataRam(event:any){
    this.filterArr = [];
    this.productData.filter((x:any)=>{
      event.filter((e:any)=>{
        if(x.RAM.includes(e)){
          var len = e.length
          var lenStr = x.RAM.substring(0,len);
          console.log(lenStr)
          if(e == lenStr){
            this.filterArr.push(x)
          }
        }
      })
    })
  }

  filterDataLocation(event:any){
    this.filterArr = [];
    this.productData.filter((x:any)=>{
      if(event == x.Location){
        this.filterArr.push(x)
      }
    })
  }

  filterDataHdd(event:any){
    this.filterArr = [];
    this.productData.filter((x:any)=>{
      if(x.HDD.includes(event)){
        this.filterArr.push(x)
      }
    })
  }

}
