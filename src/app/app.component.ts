import { Component, OnInit } from '@angular/core';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public dialog: MatDialog) { }
 
  ngOnInit(): void {
  }
  
  openDialog() {
    this.dialog.open(CreateNoteComponent, {});
  }
}
