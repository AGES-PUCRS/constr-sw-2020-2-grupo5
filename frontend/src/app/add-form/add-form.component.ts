import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Room } from 'src/interfaces/RoomsInterface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  roomForm: FormGroup;
  @Output() emit = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Room,
    private formBuilder: FormBuilder,
    private roomService: RoomService,
    private dialog: MatDialogRef<AddFormComponent>
  ) {
    this.roomForm = this.formBuilder.group({
      _id: (data) ? data._id : null,
      number: (data) ? data.number : null,
      towerNumber: (data) ? data.towerNumber : null,
      capacity: (data) ? data.capacity : null,
      resources: (data) ? data.resources : null,
      situacao: (data) ? data.online ? '1' : '2' : '1',
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const data = this.roomForm.value;

    data.online = data.situacao === '1' ?  false : true; 

    delete data.situacao;

    console.log(data);

    if (data._id) {
      this.roomService.editRoom(data).subscribe(
        data => this.emit.next(data),
        error => console.error(error)
      );
    } else {
      this.roomService.createRoom(data).subscribe(
        data => this.emit.next(data),
        error => console.error(error)
      );
    }
  }

  close() {
    this.dialog.close();
  }

}
