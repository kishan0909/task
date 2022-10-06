import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  getFromDb():Observable<any>{
    return this.http.get('https://managment-68166-default-rtdb.firebaseio.com/productDt.json').pipe(map(res=>{
      const tempSt = JSON.stringify(res);
      const temp = JSON.parse(tempSt);
      return temp 
    }))
  }
}
