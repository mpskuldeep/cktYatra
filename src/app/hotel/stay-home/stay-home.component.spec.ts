import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayHomeComponent } from './stay-home.component';

describe('StayHomeComponent', () => {
  let component: StayHomeComponent;
  let fixture: ComponentFixture<StayHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
