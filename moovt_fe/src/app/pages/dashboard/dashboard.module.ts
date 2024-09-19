import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ModalAddHabitComponent } from './modal-add-habit/modal-add-habit.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ModalAddHabitComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
