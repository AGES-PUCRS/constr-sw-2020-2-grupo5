import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Room } from 'src/interfaces/RoomsInterface';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-delete-table',
  templateUrl: './delete-table.component.html',
  styleUrls: ['./delete-table.component.css']
})
export class DeleteTableComponent implements OnInit {

  @Output() emit = new EventEmitter();

  constructor(
    private dialog: MatDialogRef<DeleteTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Room,
    private service: RoomService) { }

  ngOnInit(): void {
  }

  close() {
    this.dialog.close();
  }

  deleteRoom(room: Room) {
    this.service.deleteRoom(room).subscribe(
      data => this.emit.next(room._id),
      error => console.log(error)
    );
  }
}
