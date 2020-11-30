import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from 'src/interfaces/RoomsInterface';
import { Class } from 'src/interfaces/ClassInterface';
import { ClassService } from '../../services/class.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reservations-modal',
  templateUrl: './reservations-modal.component.html',
  styleUrls: ['./reservations-modal.component.css']
})
export class ReservationsModalComponent implements OnInit{

  reservations: Class[] = [];
  dataSource: MatTableDataSource<Class>;

  columns: string[] = ["numero", "ano", "semestre", "professor", "horas"];
  constructor(@Inject(MAT_DIALOG_DATA) public data: Room, private service: ClassService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();

  }

  ngOnInit() {
    /*
    this.data.turmas.forEach((turma: string) => {
      this.service.getClassById(turma).subscribe(
        data => this.reservations.push(data),
        error => console.log(error)
      )
    })
    */
   this.service.getClassById('5fbed35f676afafcfec37684').subscribe(data => {
      data.professor = data.professor.nome;
      this.reservations.push(data);
      this.dataSource.data = this.reservations;
   })
  }

}
