import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { StayHomeComponent } from './hotel/stay-home/stay-home.component';
import { VisitPagesComponent } from './visit-pages/visit-pages.component';
import { FoodComponent } from './food/food.component';

export const routes: Routes = [
    {path:'home', component:HomePageComponent},
    {path:'hotels', component:StayHomeComponent},
    {path:'food', component:FoodComponent},
    {path:'visit', component:VisitPagesComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
