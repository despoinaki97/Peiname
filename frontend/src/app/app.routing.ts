import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatingShopListComponent } from './rating-shop-list/rating-shop-list.component';
import { CaloriesComponent } from './calories/calories.component';
import { OrderWaitComponent } from './order-wait/order-wait.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
   { path: 'ratings', component:RatingShopListComponent },
   { path: 'calories', component:CaloriesComponent },
   { path: 'wall_order_waiting', component:OrderWaitComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
