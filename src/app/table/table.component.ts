import { Component, Input, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource:any=[];
  
  constructor(private service:FetchDataService) {
  
   }

   displayedColumns: string[] = ['employeeCode', 'firstName', 'lastName', 'jobTitleName','phoneNumber','emailAddress'];
   

  ngOnInit(): void {
    this.service.get_employees().subscribe(data => {
   
    this.dataSource=data;

    

      
      
     });
  }

}
