import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BackendAccessService } from '.././backend-access.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  title = 'Login Page';
    exist:any;
  constructor(   http: HttpClient,private baccess:BackendAccessService){}
  login(loginForm:any){
   this.exist = this.baccess.login(loginForm);
   
  }
}
