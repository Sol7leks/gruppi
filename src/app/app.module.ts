import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoteComponent } from './components/note/note.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateNoteComponent } from './create-note/create-note.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    CreateNoteComponent,
    UpdateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
