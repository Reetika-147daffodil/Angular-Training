import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateDeleteService {

  constructor(private Http:HttpClient) { }

  delete_Service(data:any)
  {
    return this.Http.delete('https://firestore.googleapis.com/v1/'+data['name']);
  }

}
