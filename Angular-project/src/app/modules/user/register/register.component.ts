import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  u:User;
  registerForm: FormGroup= new FormGroup({});
  constructor(private _usrService:UserService){
    this.registerForm=new FormGroup({
      "userName":new FormControl(this.u?.name,[Validators.required,Validators.minLength(3)]),
      "password":new FormControl(this.u?.password,[Validators.required,Validators.minLength(3)]),
      "address":new FormControl("",[Validators.required,Validators.minLength(3)]),
      "email":new FormControl("",[Validators.required,Validators.minLength(3)]),
    })
  }
  register()
  {
    this.u.name=this.registerForm.controls["userName"].value;
    this.u.password=this.registerForm.controls["password"].value;
    this.u.address=this.registerForm.controls["address"].value;
    this.u.email=this.registerForm.controls["email"].value;

    this._usrService.register(this.u).subscribe({
      next:(res=>{
        alert(res);
      })})
    
  }



}
