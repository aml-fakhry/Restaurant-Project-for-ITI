import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { OrderDetailsComponent } from './order-details/order-details.component';


const routes: Routes = [
  {path:'',redirectTo:'/admin',pathMatch:'full'},
  {path:'admin',component:AdminComponent},
  {path:'&zn@E4!#Kn43462P',component:MenuComponent},
  {path:"kwMPTp7^7fcwGCg9",component:OrderListComponent},
  {path:'orderDetails/:_id',component:OrderDetailsComponent},
  {path:"P%yxXnm_7KVYZ&xg",component:AddMealComponent},
  {path:"**" ,component:PageNotFoundComponent} 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
