import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  getAuthentication(data:{})
  {
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUJA1fVJllH4bnb2HA-5TcRlKO9FzNbWU",data) 
  }
  getSignUp(data:{})
  {
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUJA1fVJllH4bnb2HA-5TcRlKO9FzNbWU",data);
  }
}

