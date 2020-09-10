import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{HttpClientModule, HttpClient} from '@angular/common/http'; 
import { OrderServicesService } from 'src/services/order-services.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MealServesisService } from 'src/services/meal-servesis.service';
import { AdminComponent } from './admin/admin.component';
import { UserServicesService } from 'src/services/user-services.service';
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    BodyComponent,
    MenuComponent,
    OrderListComponent,
    AddMealComponent,
    PageNotFoundComponent,
    AdminComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OrderServicesService,MealServesisService,UserServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
