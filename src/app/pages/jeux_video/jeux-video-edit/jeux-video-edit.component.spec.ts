import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxVideoEditComponent } from './jeux-video-edit.component';

describe('JeuxVideoEditComponent', () => {
  let component: JeuxVideoEditComponent;
  let fixture: ComponentFixture<JeuxVideoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuxVideoEditComponent]
    });
    fixture = TestBed.createComponent(JeuxVideoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
