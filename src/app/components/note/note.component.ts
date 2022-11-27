import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { map } from 'rxjs/operators';

import { Note } from 'src/app/models/note.model';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes?: Note[];
  currentNote?: Note;
  currentIndex = -1;
  title = '';

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.currentNote = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.firebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.notes = data;
    });
  }

  setActiveTutorial(tutorial: Note, index: number): void {
    this.currentNote = tutorial;
    this.currentIndex = index;
  }
}
