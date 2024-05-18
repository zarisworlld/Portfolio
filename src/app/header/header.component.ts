import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){
  }
  items:MenuItem[]=[
    {label:'WorkExperiences',command:()=>{this.router.navigate(['/WorkExperiences'])}},
    {label:'Skills',command:()=>{this.router.navigate(['/Skills'])}},
    {label:'Contact',command:()=>{this.router.navigate(['/Contact'])}},
    {label:'About',command:()=>{this.router.navigate(['/About'])}},
    {label:'Home',command:()=>{this.router.navigate(['/Home'])}},
  ]
}
