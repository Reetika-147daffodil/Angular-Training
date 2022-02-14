import { Component, OnInit, Inject, Input } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { pluck, map } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { UpdateDeleteService } from '../update-delete.service';
import { doc, deleteDoc } from "firebase/firestore";

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


export class FirebaseDatatableComponent  {

  dataSource: any = [];
  temp: any = []
  displayedColumns: string[] = ['FirstName', 'LastName'];
  displayedColumn: string[] = ['FirstName', 'LastName','Action'];

  firstName: String = "";
  lastName: String = "";
  

  constructor(private service: FetchDataService, public dialog: MatDialog,public domSanitizer:DomSanitizer,public matIconRegistry:MatIconRegistry,public up_del :UpdateDeleteService) {
    this.matIconRegistry.addSvgIcon("update",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Images/update.svg"));
   this.callData();  

   }
    

  
  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxData, {
      width: '450px',
      
      data: { firstName: this.firstName, lastName: this.lastName },
    });

    dialogRef.afterClosed().subscribe(result => {


    if(result.firstName!=""&&result.lastName!="")
    {
      console.log(result.firstName);
      this.firstName = result.firstName;
      this.lastName = result.lastName;
      this.service.post_firebaseData({
        "fields":
        {
          "FirstName": { "stringValue": this.firstName },
          "LastName": { "stringValue": this.lastName }
        }
      }).subscribe(Response => {
        console.log(Response);  
        this.callData();
      })
      
    } 
  
    
    });
  }

  callData()
  {
    this.service.get_firebaseData()
        .pipe(pluck('documents'))
        .subscribe((data: any) => {
          console.log(data)
          data.forEach((element: any) => {
            this.temp.push({ "FirstName": element['fields'].FirstName.stringValue, "LastName": element['fields'].LastName.stringValue ,"name":element['name']});
  
          });
         this.dataSource = this.temp;
         this.temp=[];
         

  
        });
  }
  
  delete(data:any)
  {
    this.up_del.delete_Service(data).subscribe(response=>{
      console.log('data deleted')
      this.callData();
    } );

    
    
  }

 



}




//component2
@Component({
  selector: 'dialog-box-data',
  templateUrl: 'dialog-box-data.html',
})
export class DialogBoxData {
 
  constructor(
    public dialogRef: MatDialogRef<DialogBoxData>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onCancel(): void {
    console.log("Cancel")
    this.dialogRef.close();
  }
}



