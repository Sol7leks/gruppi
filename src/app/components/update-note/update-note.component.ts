import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogContent,MatDialogActions} from '@angular/material/dialog';
import { Note } from 'src/app/models/note.model';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  currentNote : Note;

  constructor(
    public firebaseService:FirebaseService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.currentNote = this.data["data"]
console.log(this.currentNote)
    }

  ngOnInit(): void {
  }

  updateNote(Title:String,Description:String){
    var data={
Title:Title,
Description:Description
    }
    this.firebaseService.update(this.currentNote.id??'',data)
  }
}
