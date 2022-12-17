import { Component, OnInit,Inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { map } from 'rxjs/operators';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Note } from 'src/app/models/note.model';
import { UpdateNoteComponent } from '../update-note/update-note.component';
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

  constructor(private firebaseService: FirebaseService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getNotes();
  }

  refreshList(): void {
    this.currentNote = undefined;
    this.currentIndex = -1;
    this.getNotes();
  }

  getNotes(): void {
    this.firebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.notes = data;
      console.log(this.notes)
    });
  }

  setNote(Note: Note, index: number): void {
    this.currentNote = Note;
    this.currentIndex = index;
  }
  // openDialog() {
  //   this.dialog.open(UpdateNoteComponent, {
  //     data: {

  //     },
  //   });
  // }
}

