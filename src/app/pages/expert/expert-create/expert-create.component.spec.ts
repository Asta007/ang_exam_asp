import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCreateComponent } from './expert-create.component';

describe('ExpertCreateComponent', () => {
  let component: ExpertCreateComponent;
  let fixture: ComponentFixture<ExpertCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertCreateComponent]
    });
    fixture = TestBed.createComponent(ExpertCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
