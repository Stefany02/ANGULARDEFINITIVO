import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { RedesComponent } from './redes/redes.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardysoftskillsComponent } from './hardysoftskills/hardysoftskills.component';
import { ErrorComponent } from './error/error.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RedesdashboardComponent } from './redesdashboard/redesdashboard.component';
import { BannerdashboardComponent } from './bannerdashboard/bannerdashboard.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DataService } from './services/data.service';
import { StudyService } from './services/study.service';
import { StateService } from './services/state.service';
import { ProjectService } from './services/project.service';
import { LocationsService } from './services/location.service';
import { JobService } from './services/job.service';
import { AuthService } from './services/auth.service';
import { SkillService } from './services/skill.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  SobremiComponent,
  RedesComponent,
  ExperienciaComponent,
  EducacionComponent,
  HardysoftskillsComponent,
  ErrorComponent,
  NavbarDashboardComponent,
  DashboardComponent,
  RedesdashboardComponent,
  BannerdashboardComponent,
  IniciarSesionComponent,
  BannerComponent,
  ProyectosComponent,
  PortfolioComponent,
  LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    DataService,
    StudyService,
    SkillService,
    StateService,
    ProjectService,
    LocationsService,
    JobService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
