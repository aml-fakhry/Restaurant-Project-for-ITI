import { Component, OnInit } from '@angular/core';
import { OrderServicesService } from 'src/services/order-services.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-order-details',
  template: `
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


  
 <br>
  <div class="container" style="text-align: center;">
  <div class="card bg-success text-white">
  <h2> Order Time</h2>
  <div class="card-body" style="font-size: 30px;"> {{orderDetails.time}}</div><br>
  </div><br>
  <div class="card bg-success text-white">
  <h2> Meals</h2>
  <div class="card-body" style="font-size: 30px;"> {{orderDetails.meals}}</div><br>
  </div><br>

  </div>
  `,
  styles: ['nav a{  font-size: 31px; font-family: cursive; margin-left: 14px; }']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private ordrserv :OrderServicesService,private route:ActivatedRoute,private router:Router) { }
 public orderDetails={time:"",meals:[],notes:""}

  public _id; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this._id=params.get('_id');
    });
    this.ordrserv.getDetails(this._id).subscribe(data=>{
      this.orderDetails=data;
      console.log(typeof(this.orderDetails))
    }
      
      )
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
