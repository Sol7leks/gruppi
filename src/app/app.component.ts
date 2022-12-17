import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { map } from 'rxjs/operators';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Note } from './models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  constructor(private firebaseService: FirebaseService,private modalService: NgbModal) { }
 
  ngOnInit(): void {
  }
  
  createnote(Titolo:String,Descrizione:String){
    var note:Note={
      Date:new Date(),
      Title:Titolo,
      Description:Descrizione,
    }
    this.firebaseService.create(note)
  }
  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
}
