import { Component, OnDestroy } from '@angular/core';
import { RoomService } from './room.service';
import { OnInit } from '@angular/core';
import { Rooms } from 'src/interfaces/RoomsInterface';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';

  dataSource: MatTableDataSource<Rooms>;
  columns: string[] = ["id", "room", "building", "situation", "capacity", "resources", "edit", "delete"];

  constructor(private roomService: RoomService) {
    this.dataSource = new MatTableDataSource();

  }

  ngOnInit() {
    this.roomService.getRooms().subscribe(response => {
      console.log(response);
      this.dataSource.data = response;
    })

  }

  ngOnDestroy() {

  }
}
