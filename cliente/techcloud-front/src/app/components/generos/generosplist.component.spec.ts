import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosplistComponent } from './generosplist.component';

describe('GenerosplistComponent', () => {
  let component: GenerosplistComponent;
  let fixture: ComponentFixture<GenerosplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
