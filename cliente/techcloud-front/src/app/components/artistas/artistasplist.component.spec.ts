import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasplistComponent } from './artistasplist.component';

describe('ArtistasplistComponent', () => {
  let component: ArtistasplistComponent;
  let fixture: ComponentFixture<ArtistasplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistasplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
