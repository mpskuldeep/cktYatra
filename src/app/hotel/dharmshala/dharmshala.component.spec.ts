import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DharmshalaComponent } from './dharmshala.component';

describe('DharmshalaComponent', () => {
  let component: DharmshalaComponent;
  let fixture: ComponentFixture<DharmshalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DharmshalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DharmshalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
