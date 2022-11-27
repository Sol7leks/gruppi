import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Note } from '../models/note.model';
@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private dbPath = '/Notes';

  notesRef: AngularFirestoreCollection<Note>;

  constructor(private db: AngularFirestore) {
    this.notesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Note> {
    return this.notesRef;
  }

  create(Note: Note): any {
    return this.notesRef.add({ ...Note });
  }

  update(id: string, data: any): Promise<void> {
    return this.notesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.notesRef.doc(id).delete();
  }
}
