import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from 'src/services/meal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealServesisService {
 // public mealModel=new Meal("meal12","meal11");
  constructor(private http:HttpClient) { }
  AddMeal(meal:Meal){
   return this.http.post<any>("http://localhost:8080/meal/addMeal",meal);
  }


listMeals():Observable<any>{
  return this.http.get<any>("http://localhost:8080/meal/listMeal")
}
}