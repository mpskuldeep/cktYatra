import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSlideComponent } from './carousel-slide.component';

describe('CarouselSlideComponent', () => {
  let component: CarouselSlideComponent;
  let fixture: ComponentFixture<CarouselSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
