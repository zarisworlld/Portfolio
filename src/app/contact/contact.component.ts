import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact-model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http:HttpClient,private messageService: MessageService){

  }
  expressUrl:string="localhost:3000";
  contactForm = new FormGroup({
    fullname:new FormControl<string>('',Validators.required),
    email:new FormControl<string | null>(null),
    subject:new FormControl<string | null>(null),
    message: new FormControl<string>('',Validators.required)
  })
  submitForm(){
    if(this.contactForm.controls["fullname"].value && this.contactForm.controls["message"].value)
    {
      var model = null;
      //var model = new Contact(this.contactForm.controls["fullname"].value ,this.contactForm.controls["message"].value,this.contactForm.controls["email"].value || null,this.contactForm.controls["subject"].value);
      this.http.post(`${this.expressUrl}\contact`,model).subscribe((res)=>{
        if(res)
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Successfully Submitted'});
        else
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Error Occured!'});
      })
    }
    else{
      this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Invalid Form!'});
    }
  }
}
