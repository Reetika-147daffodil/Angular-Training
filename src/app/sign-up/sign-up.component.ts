import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  val:any;
  error="";
  constructor(private auth:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup(
    {
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
    }
  )

  newUser()
  { 
    this.val=this.loginForm.value;

   this.auth.getSignUp({"firstName":this.loginForm.value.firstName,"lastName":this.loginForm.value.lastName,"email":this.loginForm.value.email,"password":this.loginForm.value.password})
   .subscribe(response=>{
     console.log(response);
     this.router.navigate(["login"]);
   },
   (err)=>{
    console.log(err.error.error);
    this.error = err.error.error.message;
  }
   )
  
  }

  
  
  
  login()
  {
    return this.router.navigate(["login"]);
  }

}
