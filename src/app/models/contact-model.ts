export class Contact{
    fullName:string;
    email:string;
    subject:string | null;
    message:string | null;
  
    constructor(fullName:string,email:string,subject:string,message:string) {
      this.fullName = fullName;
      this.email = email;
      this.subject = subject;
      this.message = message;
    }
  }