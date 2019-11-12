import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoosedirvoteComponent } from './pages/choosedirvote/choosedirvote.component';
import { SitchartComponent } from './pages/sitchart/sitchart.component';
import { HostchoosestoreComponent } from './pages/hostchoosestore/hostchoosestore.component';
import { ChoosecuisineComponent } from './pages/choosecuisine/choosecuisine.component';
import { VoteresComponent } from './pages/voteres/voteres.component';


const routes: Routes = [
  { path: 'choosedirvote', component: ChoosedirvoteComponent },
  { path: 'sitchart', component: SitchartComponent },
  { path: 'hostchoosestore', component: HostchoosestoreComponent },
  { path: 'choosecuisine', component: ChoosecuisineComponent },
  { path: 'voteres', component: VoteresComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
