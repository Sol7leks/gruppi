import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Note } from '../models/note.model';
@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private gPath = '/Groups';

  groupsRef: AngularFirestoreCollection<Note>;

  constructor(private db: AngularFirestore) {
    this.groupsRef = db.collection(this.gPath);
  }

  getAll(): AngularFirestoreCollection<Note> {
    return this.groupsRef;
  }

  create(Note: Note): any {
    return this.groupsRef.add({ ...Note });
  }

  update(id: string, data: any): Promise<void> {
    return this.groupsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.groupsRef.doc(id).delete();
  }
}
