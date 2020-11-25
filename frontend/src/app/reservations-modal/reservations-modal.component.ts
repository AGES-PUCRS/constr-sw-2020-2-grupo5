import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from 'src/interfaces/RoomsInterface';
import { Class } from 'src/interfaces/ClassInterface';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-reservations-modal',
  templateUrl: './reservations-modal.component.html',
  styleUrls: ['./reservations-modal.component.css']
})
export class ReservationsModalComponent implements OnInit{

  reservations: Class[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Room, private service: ClassService) {
  }

  ngOnInit() {
    this.data.turmas.forEach((turma: string) => {
      this.service.getClassById(turma).subscribe(
        data => this.reservations.push(data),
        error => console.log(error)
      )
    })
  }

}
