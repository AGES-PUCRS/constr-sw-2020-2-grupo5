import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from 'src/interfaces/RoomsInterface';

@Component({
  selector: 'app-resources-modal',
  templateUrl: './resources-modal.component.html',
  styleUrls: ['./resources-modal.component.css']
})
export class ResourcesModalComponent{

  resources: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Room
  ) {
    this.resources = data.resources;
  }
}
