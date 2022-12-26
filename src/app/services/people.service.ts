import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Note } from '../models/note.model';
@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private gPath = '/Groups';
 private pPath = '/People';

  groupsRef: AngularFirestoreCollection<Note>;
 peopleRef: AngularFirestoreCollection<Note>;

  constructor(private db: AngularFirestore) {
    this.groupsRef = db.collection(this.gPath);
     this.peopleRef = db.collection(this.pPath);
  }

  getAll(): AngularFirestoreCollection<Note> {
    return this.peopleRef;
  }

  create(Note: Note): any {
    return this.peopleRef.add({ ...Note });
  }

  update(id: string, data: any): Promise<void> {
    return this.peopleRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.peopleRef.doc(id).delete();
  }
}
