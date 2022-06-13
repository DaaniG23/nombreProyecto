import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioClasesComponent } from './horario-clases.component';

describe('HorarioClasesComponent', () => {
  let component: HorarioClasesComponent;
  let fixture: ComponentFixture<HorarioClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioClasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
