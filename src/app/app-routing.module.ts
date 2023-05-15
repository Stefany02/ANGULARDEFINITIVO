import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'',redirectTo:'/portfolio',pathMatch:'full'},
  {path:'* *', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
