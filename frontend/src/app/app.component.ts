import { Component, OnDestroy, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RoomService } from './room.service';
import { OnInit } from '@angular/core';
import { Room } from 'src/interfaces/RoomsInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AddFormComponent } from "./add-form/add-form.component";
import { DeleteTableComponent } from "./delete-table/delete-table.component";
import { ResourcesModalComponent } from './resources-modal/resources-modal.component';
import { ReservationsModalComponent } from './reservations-modal/reservations-modal.component';

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

  constructor(private roomService: RoomService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.paginator = null;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.roomService.getRooms().subscribe(response => {
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

  addRoom() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const ref = this.dialog.open(AddFormComponent);
    ref.componentInstance.emit.subscribe((data: Room) => {
      this.updateTable(data);
      ref.close();
    })
  }

  deleteRoom(data: Room) {
    const ref = this.dialog.open(DeleteTableComponent, {data})
    ref.componentInstance.emit.subscribe((id: string) => {
      this.updateTableOnDelete(id);
      ref.close();
    })
  }

  editRoom(data: Room) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const ref = this.dialog.open(AddFormComponent, {data});
    ref.componentInstance.emit.subscribe((data: Room) => {
      this.updateTable(data);
      ref.close();
    })
  }

  openResources(data: Room) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ResourcesModalComponent, {data});
  }

  openReservations(data: Room) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ReservationsModalComponent, {data});
  }

  updateTable(room: Room) {
    if (room._id) {
      const data = this.dataSource.data;
      const index = data.findIndex(e => e._id === room._id);

      if(index >= 0){
        data[index] = room;
      }
      else data.push(room);
      this.dataSource.data = data;
    } else {
      this.roomService.getRooms().subscribe(response => {
        this.dataSource.data = response;
      });
    }
  }

  updateTableOnDelete(idDeleted: string) {
    const tableData = this.dataSource.data;

    const deletedItemIndex = tableData.findIndex(e => e._id === idDeleted);

    if (deletedItemIndex >= 0) tableData.splice(deletedItemIndex, 1);
    
    this.dataSource.data = tableData;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}

