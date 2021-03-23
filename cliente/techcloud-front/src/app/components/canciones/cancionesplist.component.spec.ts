import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesplistComponent } from './cancionesplist.component';

describe('CancionesplistComponent', () => {
  let component: CancionesplistComponent;
  let fixture: ComponentFixture<CancionesplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionesplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
