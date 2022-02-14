import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  //forRegisteredUser
  getAuthentication(data:{})
  {
    return this.http.post<any>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUJA1fVJllH4bnb2HA-5TcRlKO9FzNbWU",data) 
  }

  //RegisternewUser
  getSignUp(data:{})
  {
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUJA1fVJllH4bnb2HA-5TcRlKO9FzNbWU",data);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse("localStorage.getItem('currentUser')");
    return currentUser.token;
  }
   
 

}

