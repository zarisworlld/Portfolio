import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new FormGroup({
    fullname:new FormControl<string>(''),
    email:new FormControl<string>(''),
    subject:new FormControl<string>(''),
    message: new FormControl<string>('')
  })
}
