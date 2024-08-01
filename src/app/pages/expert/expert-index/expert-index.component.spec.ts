import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertIndexComponent } from './expert-index.component';

describe('ExpertIndexComponent', () => {
  let component: ExpertIndexComponent;
  let fixture: ComponentFixture<ExpertIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertIndexComponent]
    });
    fixture = TestBed.createComponent(ExpertIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
