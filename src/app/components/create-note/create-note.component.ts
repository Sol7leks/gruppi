import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Note } from 'src/app/models/note.model';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, UntypedFormGroup, UntypedFormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  newNote:Note=new Note()
  createNote!:UntypedFormGroup
  constructor(private firebaseService: FirebaseService, public dialogRef: MatDialogRef<CreateNoteComponent>,
    private formbuilder:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.createNote= this.formbuilder.group ({
      title:['',Validators.required],
      description:['',Validators.required]
    });
    setTimeout(()=>{
      this.createNote.patchValue(this.createNote.value)
   })
  }
  createnote(){
   

    var note:Note={
      Date:new Date(),
      Title:this.newNote.Title,
      Description:this.newNote.Description,
    }
    this.firebaseService.create(note)
  
}
  get Title(){
    return this.createNote.get('title')
  } 

  get Description(){
    return this.createNote.get('description')
  } 
  
}
