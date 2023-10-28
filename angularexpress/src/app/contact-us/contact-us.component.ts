import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BackendAccessService } from '.././backend-access.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  title = 'angularexpress';
  data:any;
  detailsArray:any = [];//userList
  enable: boolean = false;
  getContactarray:any = [];
  enable1: boolean = false;
  contactsArray:any = [];
   
  constructor(private http: HttpClient,private baccess:BackendAccessService) { }

  
  getAllContacts(){
  this.contactsArray=this.baccess.getAllContacts();
  console.log(this.contactsArray);
  }
  addContacts(userData:any){
    this.contactsArray=this.baccess.addContacts(userData);
  }
  deleteContacts(userData:any){
    this.contactsArray=this.baccess.deleteContacts(userData);

  }
  updateContacts(userData:any){
    this.contactsArray=this.baccess.updateContacts(userData);
  }

  getContactByfname(userData:any){
    this.getContactarray=this.baccess.getContactByfname(userData);
  }
  hideshow1()
  {
    this.enable1 = !this.enable1;
  } 



}
