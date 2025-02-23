import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitPagesComponent } from './visit-pages.component';

describe('VisitPagesComponent', () => {
  let component: VisitPagesComponent;
  let fixture: ComponentFixture<VisitPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
