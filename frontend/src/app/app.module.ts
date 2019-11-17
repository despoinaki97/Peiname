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
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
