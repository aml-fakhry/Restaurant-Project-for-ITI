import { Component, OnInit } from '@angular/core';
import { OrderServicesService } from 'src/services/order-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  template: `
<body>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <!-- Brand/logo -->
  <a class="navbar-brand" >
    <img src="../../assets/imags/logo.png" alt="logo" style="width:100px; " class="rounded-circle">
  </a>
  
  <!-- Links -->
  <ul class="navbar-nav" >
    <li class="nav-item">
      <a class="nav-link" (click)="goMenu()" >Menu</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" (click)="goOrders()">Order List</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" (click)="goAddMeal()" >Add Meal</a>
    </li>
  </ul>
</nav>




<div id="div1" class="list-group" class="container" (click)="onSelect(order)" *ngFor="let order of orders" style=" margin-top: 10px;">
  
  <a  class="list-group-item list-group-item-action " ><h5>{{"order # "+order._id +" --date time "}}{{" time: "+order.time}}</h5></a>
</div>

</body>
  `,
  styles: [
    `nav a{  font-size: 31px; font-family: cursive; margin-left: 14px; }
    body{
      background-color: #343a40;
      height: 2000px;
    }
    #div1 a:hover{
    background-color:gold
    }
    
    `
   
  ]
})
export class OrderListComponent implements OnInit {

  constructor(private orderSer:OrderServicesService, private router :Router) { }
  orders=[]
  ngOnInit() {
    this.orderSer.getAllOrders().subscribe(data=>{
      this.orders=data;
    })
  }
  onSelect(Ordr){
    this.router.navigate(['/orderDetails',Ordr._id])
  }

  goMenu(){
    this.router.navigate(['/&zn@E4!#Kn43462P']);
  }
  goOrders()
  {
    this.router.navigate(['/kwMPTp7^7fcwGCg9']);
  }
  goAddMeal(){
    this.router.navigate(['/P%yxXnm_7KVYZ&xg']);

  }




}
