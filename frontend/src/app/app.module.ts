import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { AddFormComponent } from "./add-form/add-form.component";
import { DeleteTableComponent } from "./delete-table/delete-table.component";
import {ResourcesModalComponent} from './resources-modal/resources-modal.component';
import { ReservationsModalComponent } from './reservations-modal/reservations-modal.component';
import { HoursModalComponent } from './hours-modal/hours-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    DeleteTableComponent,
    ResourcesModalComponent,
    ReservationsModalComponent,
    HoursModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
