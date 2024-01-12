import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneResidenceComponent } from './show-one-residence.component';

describe('ShowOneResidenceComponent', () => {
  let component: ShowOneResidenceComponent;
  let fixture: ComponentFixture<ShowOneResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneResidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOneResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
