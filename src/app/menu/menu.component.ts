import { Component, OnInit } from '@angular/core';
import { MealServesisService } from 'src/services/meal-servesis.service';
import { OrderServicesService } from 'src/services/order-services.service';
import { Orders } from 'src/services/orders';
import { stringify } from 'querystring';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
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


  
  <body>
  <br>
  <div class="container" style="background-color: #5a6c805e; opacity: 1; width:70% ;"  >
  <h3 style="    font-size: xx-large;
  font-family: serif;
  font-weight: bolder;
  text-align: center;
  color: gold;">Our Meals</h3>
  <div *ngFor="let item of options" style="text-transform: capitalize;background-color: #cfcbcbbd;;font-size: x-large;
  font-family: cursive;    border-radius: 25px; margin-bottom: 5px;">
 

  
 
    <input type="checkbox" style="margin-left: 10px; width: 36px;height: 17px;"
    (change)="onChange($event.target.checked, item)"
    [checked]="checked(item)"
  >
 
    {{item.name}}
  </div>
  <br>
  <textarea rows="4" cols="50"  [(ngModel)]="notes" style=" border-radius: 6px;
  background-color: #e2e2df;" placeholder="notes" >

  </textarea>
  <br>
  <span style="font-size: 25px;
  font-weight: bold;
  color: #d2d0d5;;
  font-family: monospace;
  text-transform: capitalize;"> <span style=" color:gold">{{selected.length}}</span> meals selected <br> {{notes}}</span>
  <br>
  <button type="submit" class="btn btn-danger" (click)="save()">CheckOut</button>
  <br>
  <hr>
  <h3 *ngIf="messages.length != 0" style="color: cornsilk;
  background-color: black;
  border-radius: 11px;
  text-align: center;">Order Done</h3>
  <div *ngFor="let item of messages" style="text-align: center;
  font-family: monospace;">
    <span style="color:#ffce3b"> {{item}} </span>
  </div>
  </div>
<body>
  `,
  styles: [
    `
    nav a{  font-size: 31px; font-family: cursive; margin-left: 14px; }
    body{
      background-image: url("../../assets/imags/photo-1556742393-d75f468bfcb0.jfif");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .container{
      height: 631px;
      
    }
    span{
      font-size:25px;
      font-weight: bold;
      color:red
    }
    `
  ]
})
export class MenuComponent implements OnInit {

  constructor(private melSer: MealServesisService, private ordServ: OrderServicesService, private fb: FormBuilder,private router :Router) { }

  ngOnInit() {
    this.melSer.listMeals().subscribe(data=>{
      this.options=data;
    })

  }
  // create time
  time=new Date().toUTCString();
  //create random id
  options = [];
  selected = [];
  messages = [];
  mealNames=[];
  notes:"";
  // check if the item are selected
  checked(item){
    if(this.selected.indexOf(item) != -1){
      return true;
    }
  }
  
  // when checkbox change, add/remove the item from the array
  onChange(checked, item){
    if(checked){
    this.selected.push(item.name);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1)
    }
  }
  public orderModel=new Orders(this.time,this.mealNames,this.notes);



  save(){
    this.messages.push(this.selected.sort());
    this.mealNames.push(this.selected.sort())
    
   this.ordServ.postOrders(this.orderModel).subscribe(response =>
    console.log('Success!', response),
    error => console.log('error', error)); 
  }
  
  //Rounting

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
