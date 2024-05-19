import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  angularValue: number = 0; 
  dotNetValue: number = 0; 
  javaScriptValue: number = 0; 
  typeScriptValue: number = 0; 
  sqlValue: number = 0;
  cSharpValue: number = 0;
 ngOnInit(): void {
  setInterval(() => { 
    this.angularValue = this.angularValue + Math.floor(Math.random() * 10) + 1; 
    if (this.angularValue >= 70) { 
      this.angularValue = 70; 
    } 
  }, 700), 
    setInterval(() => { 
      this.dotNetValue = this.dotNetValue + Math.floor(Math.random() * 10) + 3; 
      if (this.dotNetValue >= 40) { 
        this.dotNetValue = 40; 
      } 
    }, 700); 
    setInterval(()=>{
      this.cSharpValue = this.cSharpValue + Math.floor(Math.random() * 10) + 3; 
      if (this.cSharpValue >= 40) { 
        this.cSharpValue = 40; 
      } 
    },700);
    setInterval(()=>{
      this.typeScriptValue = this.typeScriptValue + Math.floor(Math.random() * 10) + 3; 
      if (this.typeScriptValue >= 80) { 
        this.typeScriptValue = 80; 
      } 
    },700);
    setInterval(()=>{
      this.javaScriptValue = this.javaScriptValue + Math.floor(Math.random() * 10) + 3; 
      if (this.javaScriptValue >= 60) { 
        this.javaScriptValue = 60; 
      } 
    },700);
    setInterval(()=>{
      this.sqlValue = this.sqlValue + Math.floor(Math.random() * 10) + 3; 
      if (this.sqlValue >= 60) { 
        this.sqlValue = 60; 
      } 
    },700);
}
 }
