import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertEditComponent } from './expert-edit.component';

describe('ExpertEditComponent', () => {
  let component: ExpertEditComponent;
  let fixture: ComponentFixture<ExpertEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertEditComponent]
    });
    fixture = TestBed.createComponent(ExpertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
