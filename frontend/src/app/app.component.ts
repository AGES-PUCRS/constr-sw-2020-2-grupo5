import { Component, OnDestroy, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RoomService } from './room.service';
import { OnInit } from '@angular/core';
import { Room } from 'src/interfaces/RoomsInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'frontend';

  @ViewChild(MatPaginator) paginator: MatPaginator | null;

  dataSource: MatTableDataSource<Room>;
  columns: string[] = ["id", "room", "building", "situation", "capacity", "resources", "reserves", "edit", "delete"];

  constructor(private roomService: RoomService) {
    this.dataSource = new MatTableDataSource();
    this.paginator = null;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.roomService.getRooms().subscribe(response => {
      console.log(response);
      this.dataSource.data = response;
    })

  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {

  }
  deleteRoom(room: Room) {

  }

  editRoom(room: Room) {

  }

}

