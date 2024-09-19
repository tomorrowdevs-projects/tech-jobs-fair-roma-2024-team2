import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ModalAddHabitComponent } from './modal-add-habit/modal-add-habit.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ModalAddHabitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
