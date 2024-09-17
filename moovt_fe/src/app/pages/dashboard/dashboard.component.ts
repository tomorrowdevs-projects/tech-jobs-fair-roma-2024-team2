import {Component, OnInit} from '@angular/core';
import {HabitDTO} from "../../models/habitDTO";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements  OnInit {

  public habitData : HabitDTO[] = [];

  ngOnInit() {
    this.init();
  }

  private init() {

  }

  public openModalCreateHabit() {
    //TODO: Inserire apertura modale stepper con form per creare nuova habit
  }

}
