import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http:HttpClient) {

   }

   get_employees()
   {
    return this.http.get('http://localhost:3000/Employees');
   }

   get_firebaseData()
   {
    return this.http.get('https://firestore.googleapis.com/v1/projects/employee-dashboard-3a0bc/databases/(default)/documents/employee-details');
   }


}
