import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertShowComponent } from './expert-show.component';

describe('ExpertShowComponent', () => {
  let component: ExpertShowComponent;
  let fixture: ComponentFixture<ExpertShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertShowComponent]
    });
    fixture = TestBed.createComponent(ExpertShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
