import { Component, OnInit, Inject } from '@angular/core';
import { Room } from 'src/interfaces/RoomsInterface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
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
