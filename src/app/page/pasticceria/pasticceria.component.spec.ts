import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasticceriaComponent } from './pasticceria.component';

describe('PasticceriaComponent', () => {
  let component: PasticceriaComponent;
  let fixture: ComponentFixture<PasticceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasticceriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasticceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
