import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LattosioComponent } from './lattosio.component';

describe('LattosioComponent', () => {
  let component: LattosioComponent;
  let fixture: ComponentFixture<LattosioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LattosioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LattosioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
