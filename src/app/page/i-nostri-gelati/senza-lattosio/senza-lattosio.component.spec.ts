import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenzaLattosioComponent } from './senza-lattosio.component';

describe('SenzaLattosioComponent', () => {
  let component: SenzaLattosioComponent;
  let fixture: ComponentFixture<SenzaLattosioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SenzaLattosioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenzaLattosioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
