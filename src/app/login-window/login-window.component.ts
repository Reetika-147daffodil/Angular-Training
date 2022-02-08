import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup(
    {
      Employee_Code:new FormControl(''),
      Email:new FormControl('')
    }
  )
  loginUser()
  {
    console.warn(this.loginForm.value);
  }


}
