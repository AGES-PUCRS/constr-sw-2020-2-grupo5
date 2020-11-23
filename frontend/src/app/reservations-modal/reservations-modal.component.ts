import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from 'src/interfaces/RoomsInterface';

@Component({
  selector: 'app-reservations-modal',
  templateUrl: './reservations-modal.component.html',
  styleUrls: ['./reservations-modal.component.css']
})
export class ReservationsModalComponent{

  reservations: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Room) {
    this.reservations = data.aulas;
  }

}
