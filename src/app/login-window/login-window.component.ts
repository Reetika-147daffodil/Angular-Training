import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';



@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {
  val:any;
  error="";
  constructor(private auth:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup(
    {
    
      email:new FormControl(''),
      password:new FormControl(''),
    }
  )
  loginUser()
  { 
    this.val=this.loginForm.value;

   this.auth.getAuthentication({"email":this.loginForm.value.email,"password":this.loginForm.value.password})
   .subscribe(response=>{
     console.log(response);
     this.router.navigate(["table"]);
   },
   (err)=>{
    console.log(err.error.error);
    this.error = err.error.error.message;
  }
   )
  
  }

  signUp()
  {
    return this.router.navigate(["signup"]);
  }


}
