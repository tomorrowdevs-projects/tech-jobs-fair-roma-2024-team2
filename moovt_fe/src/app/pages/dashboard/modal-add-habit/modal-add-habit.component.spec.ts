import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddHabitComponent } from './modal-add-habit.component';

describe('ModalAddHabitComponent', () => {
  let component: ModalAddHabitComponent;
  let fixture: ComponentFixture<ModalAddHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAddHabitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAddHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
