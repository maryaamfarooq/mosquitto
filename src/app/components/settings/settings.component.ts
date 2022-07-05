import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Option {
  value: string;
  viewValue: string;
}

export interface AddUserDialogData {
  serviceURL: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {


  sounds: Option[] = [
    {value: 'no-sound-0', viewValue: 'No Sound'},
    {value: 'ding-0', viewValue: 'Ding'}, 
    {value: 'juntos-1', viewValue: 'Juntos'}, 
    {value: 'pristine-2', viewValue: 'Pristine'},
  ];

  priorities: Option[] = [
    {value: 'any-priority-0', viewValue: 'Any priority'},
    {value: 'low-priority-1', viewValue: 'Low priority and higher'},
    {value: 'default-priority-2', viewValue: 'Default priority and higher'},
    {value: 'high-priority-3', viewValue: 'High priority and higher'},
    {value: 'max-priority-4', viewValue: 'Only max priority'}
  ]

  deleteNotif: Option[] = [
    {value: 'never-0', viewValue: "Never"},
    {value: 'three-hours-1', viewValue: "After three hours"},
    {value: 'one-day-2', viewValue: "After one day"},
    {value: 'one-week-3', viewValue: "After one week"},
    {value: 'one-month-4', viewValue: "After one month"}
  ]

  selectedSound = this.sounds[0].value;
  selectedPriority = this.priorities[0].value;
  selectedDeleteNotif = this.deleteNotif[0].value;

  serviceURL="";
  username = "";
  password = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displaySound(value: string): string {
    if(value === 'no-sound-0'){
      return "do not play any";
    }
    else { 
      for(var i = 1; i < this.sounds.length; i++) {
        if(value === this.sounds[i].value){
          return "the " + this.sounds[i].viewValue;
        }
      }
    }
    return "";
  }

  displayPriority(value: string): string {
    switch(value) {
      case 'any-priority-0': return "Showing all notifications, regardless of priority";
      case 'low-priority-1': return "Show notifications if priority is 2 (low) or above";
      case 'default-priority-2': return "Show notifications if priority is 3 (default) or above";
      case 'high-priority-3': return "Show notifications if priority is 4 (high) or above";
      case 'max-priority-4': return "Show notifications if priority is 5 (max)";
      default: return "";
    }
  }

  displayDeleteNotif(value: string): string {
    if(value === 'never-0') {
      return "never auto-deleted";
    }
    else { 
      for(var i = 1; i < this.deleteNotif.length; i++) {
        if(value === this.deleteNotif[i].value){
          return "auto-deleted " + this.deleteNotif[i].viewValue.toLowerCase();
        }
      }
    }
    return "";
  }

  addUser(): void {
    const dialogRef = this.dialog.open(AddUserDialog, {
      width: '650px',
      height: '380px',
      data: {serviceURL: this.serviceURL, username: this.username, password: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.serviceURL = result.serviceURL;
      // this.username = result.username;
      // this.password = result.password;
      console.log(result);
    });
  }

}

@Component({
  selector: 'add-user-dialog',
  templateUrl: './add-user-dialog.html',
  styleUrls: ['./settings.component.css']
})

export class AddUserDialog {

  addDisabled = true;

  constructor(
    public dialogRef: MatDialogRef<AddUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: AddUserDialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close(this.data);
  }

}
