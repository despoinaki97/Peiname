import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoosedirvoteComponent } from './pages/choosedirvote/choosedirvote.component';
import { SitchartComponent } from './pages/sitchart/sitchart.component';
import { HostchoosestoreComponent } from './pages/hostchoosestore/hostchoosestore.component';
import { ChoosecuisineComponent } from './pages/choosecuisine/choosecuisine.component';
import { VoteresComponent } from './pages/voteres/voteres.component';
import { RestmenuComponent } from './pages/restmenu/restmenu.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { ItemdetailsComponent } from './pages/itemdetails/itemdetails.component';
import { StateofcuisineComponent } from './pages/stateofcuisine/stateofcuisine.component';
import { TvComponent } from './Gs_Pages/tv/tv.component';
import { TvPaymentComponent } from './Gs_Pages/tv-payment/tv-payment.component';
import { TvStatisticsCuisineComponent } from './Gs_Pages/tv-statistics-cuisine/tv-statistics-cuisine.component';
import { TvStatisticsRestaurantComponent } from './Gs_Pages/tv-statistics-restaurant/tv-statistics-restaurant.component';
import { BillManagmentComponent } from './Gs_Pages/bill-managment/bill-managment.component';
import { FinalTableComponent } from './Gs_Pages/final-table/final-table.component';
import { RestaurantVoteResultsComponent } from './Gs_Pages/restaurant-vote-results/restaurant-vote-results.component';
import { TrapeziConfirmationComponent } from './Gs_Pages/trapezi-confirmation/trapezi-confirmation.component';
import { OrderWaitComponent } from './order-wait/order-wait.component';
import { CaloriesComponent } from './calories/calories.component';
import { RatingShopListComponent } from './rating-shop-list/rating-shop-list.component';



const routes: Routes = [
  { path: 'choosedirvote', component: ChoosedirvoteComponent },
  { path: 'sitchart', component: SitchartComponent },
  { path: 'hostchoosestore', component: HostchoosestoreComponent },
  { path: 'choosecuisine', component: ChoosecuisineComponent },
  { path: 'voteres', component: VoteresComponent },
  { path: 'restmenu', component: RestmenuComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'itemdetails', component: ItemdetailsComponent },
  { path: 'stateofcuisine', component: StateofcuisineComponent },
  { path: 'tv', component: TvComponent},
  { path: 'tv-payment', component: TvPaymentComponent},
  { path: 'tv-statistics-cuisine', component: TvStatisticsCuisineComponent}, 
  { path: 'tv-statistics-restaurant', component: TvStatisticsRestaurantComponent},
  { path: 'bill-managment', component: BillManagmentComponent},
  { path: 'Final-table' , component: FinalTableComponent},
  { path: 'Table_restaurant_vote_results' , component: RestaurantVoteResultsComponent},
  { path: 'Table_confirmation' , component: TrapeziConfirmationComponent},
  { path: 'Order_Wait' , component: OrderWaitComponent} ,
  { path: 'calories' , component: CaloriesComponent},
  { path: 'Rating_Shop_list' , component: RatingShopListComponent}









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }