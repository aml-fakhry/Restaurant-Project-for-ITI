import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  constructor(private http:HttpClient) { }
 
  // return orders from server
  getAllOrders():Observable<any>{
    return this.http.get<any>("http://localhost:8080/order/listOrder")
  }


  //post oredr to server

  postOrders(order:Orders){
    return this.http.post("http://localhost:8080/order/addOrder",order)
  }

  // get order details

  getDetails(_id:string):Observable<any>{
    return this.http.get<any>('http://localhost:8080/order/orderDetails/'+_id);
  }
}
