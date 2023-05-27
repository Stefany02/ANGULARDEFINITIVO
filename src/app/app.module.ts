import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { HardysoftskillsComponent } from './hardysoftskills/hardysoftskills.component';
import { ErrorComponent } from './error/error.component';
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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { AddBtnComponent } from './estudios/add-btn/add-btn.component';
import { EditBtnComponent } from './estudios/edit-btn/edit-btn.component';


@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  SobremiComponent,
  HardysoftskillsComponent,
  ErrorComponent,
  BannerComponent,
  ProyectosComponent,
  PortfolioComponent,
  LoginComponent,
  EstudiosComponent,
  AddBtnComponent,
  EditBtnComponent
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
