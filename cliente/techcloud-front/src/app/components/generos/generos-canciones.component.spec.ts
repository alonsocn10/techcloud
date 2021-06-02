import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosCancionesComponent } from './generos-canciones.component';

describe('GenerosCancionesComponent', () => {
  let component: GenerosCancionesComponent;
  let fixture: ComponentFixture<GenerosCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosCancionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
