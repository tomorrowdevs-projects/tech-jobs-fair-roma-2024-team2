import {Component, OnInit} from '@angular/core';
import {HabitDTO} from "../../models/habitDTO";
import { ModalAddHabitComponent } from "./modal-add-habit/modal-add-habit.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements  OnInit {

  public habitData : HabitDTO[] = [];
  habits: HabitDTO[] = [
    { id: 1, title: 'Exercise' },
    { id: 2, title: 'Read' },
    { id: 3, title: 'Meditate' }
  ];

  reminders: Notification[] = [
    { id: 1, title: 'Call mom' },
    { id: 2, title: 'Pay bills' },
    { id: 3, title: 'Buy groceries' }
  ];

  constructor(
    private modalService : NgbModal
  ) {
  }

  ngOnInit() {
    this.init();
  }

  public openModalCreateHabit() {
    const modalRef = this.modalService.open(ModalAddHabitComponent);
    modalRef.closed.subscribe( result => {
    })
  }

  private init() {

  }

}

export interface Notification {
  id?: number;
  title?: string;
}
