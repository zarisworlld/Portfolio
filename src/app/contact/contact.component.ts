import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact-model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactModel!: Contact;
  constructor(private http:HttpClient,private messageService: MessageService){

  }
  expressUrl:string='http://localhost:3000/contact';
  contactForm = new FormGroup({
    fullname:new FormControl<string>('',Validators.required),
    email:new FormControl<string | null>(null),
    subject:new FormControl<string | null>(null),
    message: new FormControl<string>('',Validators.required)
  })
  submitForm(){
    if(this.contactForm.controls["fullname"].value && this.contactForm.controls["message"].value)
    {
      this.contactModel =  {
      fullName:this.contactForm.value.fullname ,
      email:this.contactForm.value.email ,
      message:this.contactForm.value.message ,
      subject:this.contactForm.value.subject } as Contact;
      this.http.post<any>(`${this.expressUrl}`,this.contactModel).subscribe((res)=>{
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
