import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { ModalComponent } from './pages/modal/modal.component';
import { StateofcuisineComponent } from './pages/stateofcuisine/stateofcuisine.component';
import { TvMainComponent } from './src/app/Gs_Pages/tv-main/tv-main.component';
import { TvPaymentComponent } from './Gs_Pages/tv-main/Gs_Pages/tv-payment/tv-payment.component';
import { TvComponent } from './Gs_Pages/tv/tv.component';
import { TvStatisticsCuisineComponent } from './Gs_Pages/tv-statistics-cuisine/tv-statistics-cuisine.component';
import { TvStatisticsRestaurantComponent } from './Gs_Pages/tv-statistics-restaurant/tv-statistics-restaurant.component';
import { BillManagmentComponent } from './Gs_Pages/bill-managment/bill-managment.component';
import { TrapeziConfirmationComponent } from './Gs_Pages/trapezi-confirmation/trapezi-confirmation.component';
import { RestaurantVoteResultsComponent } from './Gs_Pages/restaurant-vote-results/restaurant-vote-results.component';
import { FinalTableComponent } from './Gs_Pages/final-table/final-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SitchartComponent,
    ChoosedirvoteComponent,
    HostchoosestoreComponent,
    ChoosecuisineComponent,
    VoteresComponent,
    RestmenuComponent,
    CartComponent,
    IngredientsComponent,
    ItemdetailsComponent,
    ModalComponent,
    StateofcuisineComponent,
    TvMainComponent,
    TvPaymentComponent,
    TvComponent,
    TvStatisticsCuisineComponent,
    TvStatisticsRestaurantComponent,
    BillManagmentComponent,
    TrapeziConfirmationComponent,
    RestaurantVoteResultsComponent,
    FinalTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
  ]
})
export class AppModule { }
