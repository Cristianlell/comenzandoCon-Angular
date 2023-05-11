import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAnimacionesComponent } from './ejemplo-animaciones.component';

describe('EjemploAnimacionesComponent', () => {
  let component: EjemploAnimacionesComponent;
  let fixture: ComponentFixture<EjemploAnimacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploAnimacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploAnimacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
