import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SitchartComponent } from './pages/sitchart/sitchart.component';
import { ChoosedirvoteComponent } from './pages/choosedirvote/choosedirvote.component';
import { HostchoosestoreComponent } from './pages/hostchoosestore/hostchoosestore.component';
import { ChoosecuisineComponent } from './pages/choosecuisine/choosecuisine.component';
import { VoteresComponent } from './pages/voteres/voteres.component';
import { RestmenuComponent } from './pages/restmenu/restmenu.component';
import { CartComponent } from './pages/cart/cart.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { ItemdetailsComponent } from './pages/itemdetails/itemdetails.component';
import { NgbModal,NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { ModalComponent } from './pages/modal/modal.component';
import { StateofcuisineComponent } from './pages/stateofcuisine/stateofcuisine.component';
import { TvComponent } from './Gs_Pages/tv/tv.component';
import { TvStatisticsCuisineComponent } from './Gs_Pages/tv-statistics-cuisine/tv-statistics-cuisine.component';
import { TvStatisticsRestaurantComponent } from './Gs_Pages/tv-statistics-restaurant/tv-statistics-restaurant.component';
import { BillManagmentComponent } from './Gs_Pages/bill-managment/bill-managment.component';
import { TrapeziConfirmationComponent } from './Gs_Pages/trapezi-confirmation/trapezi-confirmation.component';
import { RestaurantVoteResultsComponent } from './Gs_Pages/restaurant-vote-results/restaurant-vote-results.component';
import { FinalTableComponent } from './Gs_Pages/final-table/final-table.component';
import { TvPaymentComponent } from './Gs_Pages/tv-payment/tv-payment.component';
import { OrderWaitComponent } from './order-wait/order-wait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaloriesComponent } from './calories/calories.component';
import { RatingShopListComponent } from './rating-shop-list/rating-shop-list.component';
import { RestaurantsComponent } from './tv_components/restaurants/restaurants.component';
import { RestaurantItemComponent } from './tv_components/restaurant-item/restaurant-item.component';
import { TableComponent } from './Gs_Pages/table/table.component';
import { HttpClientModule  } from '@angular/common/http';
import { TableStartComponent } from './table-start/table-start.component';
import { TableVoteCompletedComponent } from './table-vote-completed/table-vote-completed.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateofrestComponent } from './pages/stateofrest/stateofrest.component';
import { WallComponent } from './wall/wall.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { IdleComponent } from './idle/idle.component';

@NgModule({
  declarations: [
    AppComponent,
    SitchartComponent,
    ChoosedirvoteComponent,
    HostchoosestoreComponent,
    ChoosecuisineComponent,
    VoteresComponent,
    CaloriesComponent,
    RestmenuComponent,
    CartComponent,
    IngredientsComponent,
    ItemdetailsComponent,
    ModalComponent,
    StateofcuisineComponent,
    TvComponent,
    TvStatisticsCuisineComponent,
    TvStatisticsRestaurantComponent,
    BillManagmentComponent,
    TrapeziConfirmationComponent,
    RestaurantVoteResultsComponent,
    FinalTableComponent,
    OrderWaitComponent,
    TvPaymentComponent,
    RatingShopListComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    TableComponent,
    TableStartComponent,
    TableVoteCompletedComponent,
    FormModalComponent,
    StateofrestComponent,
    WallComponent,
    CartModalComponent,
    IdleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[FormModalComponent,CartModalComponent
  ]
})
export class AppModule { }