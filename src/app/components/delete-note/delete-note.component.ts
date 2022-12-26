import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogContent,MatDialogActions} from '@angular/material/dialog';
import { Note } from 'src/app/models/note.model';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {
  currentNote : Note;

  constructor(
    public firebaseService:FirebaseService,
    public dialogRef: MatDialogRef<DeleteNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.currentNote = this.data["data"]
    }
    ngOnInit(): void {
    }
  
    deleteNote(){
      this.firebaseService.delete(this.currentNote.id!).then(()=>{location.reload()})
      
    }
}

