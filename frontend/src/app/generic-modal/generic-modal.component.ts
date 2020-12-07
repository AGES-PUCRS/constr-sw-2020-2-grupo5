import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Room } from 'src/interfaces/RoomsInterface';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})


/**
 * Modal to delete or show info.
 * 
 * Props to pass: 
 * text: string
 * description: string
 * buttonCloseText: string
 * type: info or delete
 * buttonSubmitText: string - OPTIONAL
 * objectData: Room Object - OPTIONAL
 * submitFunction: Function - OPTIONAL
 * 
 */

export class GenericModalComponent{

  @Output() emitter = new EventEmitter;

  constructor(
    private dialog: MatDialogRef<GenericModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      text: string;
      description: string;
      buttonCloseText: string;
      type: 'info' | 'delete';
      buttonSubmitText?: string;
      objectData?: Room;
      submitFunction?: {(): Observable<boolean>};  
    }
  ) { }

  close() {
    this.dialog.close();
  }

  doFunction() {
    if (typeof this.data.submitFunction === 'function') {
      this.data.submitFunction().subscribe(
        () => this.emitter.next(this.data.objectData?._id),
        error => console.warn(error)
      )
    }; 
  }

}
