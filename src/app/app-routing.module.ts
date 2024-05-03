import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { OffresComponent } from './offres/offres.component';
import { ProgrammeComponent } from './programme/programme.component';
import { SettingsComponent } from './settings/settings.component';
import { MediaComponent } from './media/media.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'products',component:ProductsComponent},
  {path:'offres',component:OffresComponent},
  {path:'programme',component:ProgrammeComponent},
  {path:'settings',component:SettingsComponent},
  {path:'media',component:MediaComponent},
  {path:'statistics',component:StatisticsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
