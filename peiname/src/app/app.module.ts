import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitchartComponent } from './pages/sitchart/sitchart.component';
import { ChoosedirvoteComponent } from './pages/choosedirvote/choosedirvote.component';

@NgModule({
  declarations: [
    AppComponent,
    SitchartComponent,
    ChoosedirvoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
