import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Class } from 'src/interfaces/ClassInterface';

@Component({
  selector: 'app-hours-modal',
  templateUrl: './hours-modal.component.html',
  styleUrls: ['./hours-modal.component.css']
})
export class HoursModalComponent{

  hours: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Class) {
    this.hours = data.horario;
  }

}
