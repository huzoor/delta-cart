import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class AngularMaterialModule { }
