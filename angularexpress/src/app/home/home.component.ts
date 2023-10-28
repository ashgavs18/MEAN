import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BackendAccessService } from '.././backend-access.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  title = 'angularexpress';
  data:any;
  detailsArray:any = [];//userList
  enable: boolean = false;
  getuserarray:any = [];
  enable1: boolean = false;
   
  constructor(private http: HttpClient,private baccess:BackendAccessService) { }


  getAllUser(){
    this.detailsArray=this.baccess.getAllUser();
  }
  addUser(userData:any){
    this.data=this.baccess.addUser(userData);
  }
  deleteUser(userData:any){
    this.data=this.baccess.deleteUser(userData);
  }
  getUserByID(userData:any){
  this.getuserarray=this.baccess.getUserByID(userData);
  }
  updateUser(userData:any){
    this.data=this.baccess.updateUser(userData);
  }
  hideshow()
  {
    this.enable = !this.enable;
  } 

}
