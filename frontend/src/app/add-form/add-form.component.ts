import { Component, OnInit, Inject } from '@angular/core';
import { Room } from 'src/interfaces/RoomsInterface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup} from '@angular/forms';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  roomForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Room,
    private formBuilder: FormBuilder,
    private roomService: RoomService,
  ) {
    this.roomForm = this.formBuilder.group({
      _id: (data) ? data._id : null,
      numero: (data) ? data.number : null,
      predio: (data) ? data.towerNumber : null,
      capacidade: (data) ? data.capacity : null,
      recursos: (data) ? data.resources : null,
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const data: Room = this.roomForm.value;
    console.log(data);
    return;
    if (data._id) {
      this.roomService.editRoom(data).subscribe(res => {
        console.log(res);
      });
    } else {
      this.roomService.createRoom(data).subscribe(res => {
        console.log(res);
      });
    }
  }

}
