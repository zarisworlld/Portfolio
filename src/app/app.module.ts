import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperincesComponent } from './work-experinces/work-experinces.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from "primeng/autocomplete";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import {HttpClientModule} from '@angular/common/http';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    WorkExperincesComponent,
    SkillsComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ProgressBarModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    FloatLabelModule,
    ButtonModule,
    HttpClientModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
