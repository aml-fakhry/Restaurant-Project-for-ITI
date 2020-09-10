import { Component, OnInit } from '@angular/core';
import { MealServesisService } from 'src/services/meal-servesis.service';
import { Meal } from 'src/services/meal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

 
 

  constructor(private mealServ: MealServesisService,private router :Router) { }
  public mealModel=new Meal("","");
  onSubmit(){
    this.mealServ.AddMeal(this.mealModel).subscribe(response =>
      console.log('Success!', response),
      error => console.log('error', error))
     alert("ok ");
     this.router.navigate(['/&zn@E4!#Kn43462P']);

  }

  ngOnInit() {
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
