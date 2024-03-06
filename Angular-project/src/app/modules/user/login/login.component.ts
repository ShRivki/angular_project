
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  u:User;
 loginForm: FormGroup= new FormGroup({});
  constructor(private _usrService:UserService,private _router:Router){
    this.loginForm=new FormGroup({
      "userName":new FormControl("",[Validators.required,Validators.minLength(3)]),
      "password":new FormControl("",[Validators.required,Validators.minLength(3)]),
    })
  }
  login()
  {
    this.u.name=this.loginForm.controls["userName"].value;
    this.u.password=this.loginForm.controls["password"].value;
    this._usrService.login(this.u)
    if(this._usrService.getUser()!=undefined){
      this._router.navigate(["home"])
    }
    else{
      this._router.navigate(["register"])
    }
  }

}
