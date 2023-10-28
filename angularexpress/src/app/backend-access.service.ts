import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'

})
export class BackendAccessService {

  title = 'angularexpress';
  data:any=[];
  detailsArray:any = [];//userList
  contactArray:any = [];//userList
  enable: boolean = false;
  getuserarray:any = [];
 enable1: boolean = false;
  getContactsarray:any = [];
  exist: boolean = false;

  constructor(private http: HttpClient,private router:Router) { }
  login(loginForm:any){
    this.http.get(`http://localhost:9901/Login?uid=${loginForm.value.uid}&password=${loginForm.value.password}`).subscribe((res)=>{
    this.data = res;
    console.log(this.data);

    if(this.data != null){
      this.exist = true;
      this.router.navigate(['/Home']);
    }
    else{
      this.exist = false;
    }
    console.log(this.exist);  
    })
    
    return this.exist
  }
  getAllUser(){
    this.http.get('http://localhost:9901/All').subscribe((res)=>{
      
      this.detailsArray = res;

      console.log(this.detailsArray);
      
    })
    return this.detailsArray;
  }
  addUser(userData:any){
    this.http.post('http://localhost:9901/AddUser',userData.value).subscribe((response)=>{
      
      this.data = response;
      console.log(this.data);
      
    })
    return this.data;
  }
  deleteUser(userData:any){
    this.http.delete(`http://localhost:9901/DeleteUser?uid=${userData}`).subscribe((response)=>{
      this.data = response;
      console.log(this.data);
    })
    return this.data
  }
  getUserByID(userData:any){
    this.http.get(`http://localhost:9901/GetUserByID?uid=${userData}`).subscribe((response)=>{
     this.getuserarray = response;
     console.log(this.getuserarray);
    })
    return this.getuserarray
    
  }
  updateUser(userData:any){
    this.http.put('http://localhost:9901/ModifyUser',userData.value).subscribe((response)=>{
      this.data = response;
      console.log(this.data);
      
    })
    return this.data;
  }
  getAllContacts(){
    this.http.get('http://localhost:9901/GetAllContacts').subscribe((res)=>{
    this.contactArray = res;
    });
    console.log(this.contactArray);
    return this.contactArray;
  }
  addContacts(userData1:any){
    this.http.post('http://localhost:9901/AddContacts',userData1.value).subscribe((response)=>{
      this.data = response;
      console.log(this.data);
      
    })
    return this.data;
  }
  deleteContacts(userData1:any){
    this.http.delete(`http://localhost:9901/DeleteContacts?fname=${userData1.value.fname}`).subscribe((response)=>{
      this.data = response;
      console.log(this.data);
    })
    return this.data
  }
  updateContacts(userData1:any){
    this.http.put('http://localhost:9901/ModifyContact',userData1.value).subscribe((response)=>{
      this.data = response;
      console.log(this.data);
    })
    return this.data;
  }
  getContactByfname(userData1:any){
    
    this.http.get(`http://localhost:9901/GetUserByfname?fname=${userData1.value.fname}`).subscribe((response)=>{
     this.getContactsarray = response;
     console.log(this.getContactsarray);
    })
    return this.getContactsarray
  }
  
}
