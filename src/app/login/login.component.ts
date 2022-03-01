import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService,private rs:RouterService) { }
  loginForm= new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })


  ngOnInit(): void {
  }

  onLogin(){
    if(this.loginForm.get('email')?.valid && this.loginForm.get('password')?.valid){
      let user = this.loginForm.value as User
      console.log(user)
      localStorage.setItem('email',user.email)
      this.as.createToken(user).subscribe(
        (data:any)=>{
          this.as.setToken(data['token'])
          console.log(data)
          this.rs.routeToHome()
  
        }
      )
    }
    
  }

}
