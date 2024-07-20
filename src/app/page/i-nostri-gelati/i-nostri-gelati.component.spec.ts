import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INostriGelatiComponent } from './i-nostri-gelati.component';

describe('INostriGelatiComponent', () => {
  let component: INostriGelatiComponent;
  let fixture: ComponentFixture<INostriGelatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [INostriGelatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(INostriGelatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
