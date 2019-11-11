import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoosedirvoteComponent } from './pages/choosedirvote/choosedirvote.component';
import { SitchartComponent } from './pages/sitchart/sitchart.component';
import { HostchoosestoreComponent } from './pages/hostchoosestore/hostchoosestore.component';


const routes: Routes = [
  { path: 'choosedirvote', component: ChoosedirvoteComponent },
  { path: 'sitchart', component: SitchartComponent },
  { path: 'hostchoosestore', component: HostchoosestoreComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
