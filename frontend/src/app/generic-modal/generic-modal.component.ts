import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})
export class GenericModalComponent implements OnInit {

  @Output() emitter = new EventEmitter;

  constructor(
    private dialog: MatDialogRef<GenericModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      text: string;
      description: string;
      buttonCloseText: string;
      type: 'info' | 'delete';
      buttonSubmitText?: string;
      objectData?: Object;
      submitFunction?: {(): Observable<boolean>};  
    }
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialog.close();
  }

  doFunction() {
    if (typeof this.data.submitFunction === 'function') {
      this.data.submitFunction().subscribe(
        val => this.emitter.next(this.data.objectData._id),
        error => console.warn(error)
      )
    }; 
  }

}
