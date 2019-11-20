import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { RatingShopListComponent } from './rating-shop-list/rating-shop-list.component';
import { CaloriesComponent } from './calories/calories.component';
import { OrderWaitComponent } from './order-wait/order-wait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CuisineVoteCompleteTableComponent } from './kostaspages/cuisine-vote-complete-table/cuisine-vote-complete-table.component';
import { ItemSelectionTableLoadComponent } from './kostaspages/item-selection-table-load/item-selection-table-load.component';
import { ItemSelectionTableReadyComponent } from './kostaspages/item-selection-table-ready/item-selection-table-ready.component';
import { VoteRestTableComponent } from './kostaspages/vote-rest-table/vote-rest-table.component';
@NgModule({
  declarations: [
    AppComponent,
    RatingShopListComponent,
    CaloriesComponent,
    OrderWaitComponent,
    CuisineVoteCompleteTableComponent,
    ItemSelectionTableLoadComponent,
    ItemSelectionTableReadyComponent,
    VoteRestTableComponent    
    // HeroListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
