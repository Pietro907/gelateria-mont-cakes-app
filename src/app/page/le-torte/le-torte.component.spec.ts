import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeTorteComponent } from './le-torte.component';

describe('LeTorteComponent', () => {
  let component: LeTorteComponent;
  let fixture: ComponentFixture<LeTorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeTorteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeTorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
