import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosnewComponent } from './generosnew.component';

describe('GenerosnewComponent', () => {
  let component: GenerosnewComponent;
  let fixture: ComponentFixture<GenerosnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
