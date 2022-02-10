import { Component, OnInit ,Inject} from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { pluck, map} from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

//DialogBoxData
export interface DialogData {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-firebase-datatable',
  templateUrl: './firebase-datatable.component.html',
  styleUrls: ['./firebase-datatable.component.css']
})


export class FirebaseDatatableComponent implements OnInit {

  dataSource:any=[];
  temp:any=[]
  displayedColumns: string[] = ['FirstName', 'LastName'];

  firstName: String="";
  lastName: String="";
  
 constructor(private service:FetchDataService,public dialog: MatDialog) {}
  ngOnInit(): void {
    this.service.get_firebaseData()
    .pipe(pluck('documents'))
    .subscribe((data:any) => {
      data.forEach((element:any) => {
       this.temp.push({"FirstName":element['fields'].FirstName.stringValue,"LastName":element['fields'].LastName.stringValue});
        
      });
     
   
    this.dataSource=this.temp;
    console.log(this.dataSource);
      
     });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxData, {
      width: '450px',
      data: {firstName: this.firstName, lastName: this.lastName},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.firstName = result.firstName;
      this.lastName=result.lastName;
    });
  }

}

@Component({
  selector: 'dialog-box-data',
  templateUrl: 'dialog-box-data.html',
})
export class DialogBoxData {
  constructor(
    public dialogRef: MatDialogRef<DialogBoxData>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}



