import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/models/note.model';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Note) {}

  ngOnInit(): void {
  }

}
