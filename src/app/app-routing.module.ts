import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent,title:'Home',pathMatch:'full'},
  {path:'Skills',component:SkillsComponent,title:'Skills',pathMatch:'full'},
  {path:'Contact',component:ContactComponent,title:'Contact',pathMatch:'full'},
  {path:'About',component:AboutComponent,title:'About'},
  {path:'**',component:NotFoundComponent,title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
