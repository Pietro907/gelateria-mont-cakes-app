import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateProjectComponent } from './button-create-project.component';

describe('ButtonCreateProjectComponent', () => {
  let component: ButtonCreateProjectComponent;
  let fixture: ComponentFixture<ButtonCreateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonCreateProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
