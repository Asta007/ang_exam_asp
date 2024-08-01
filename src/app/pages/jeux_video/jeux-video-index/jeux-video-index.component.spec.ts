import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxVideoIndexComponent } from './jeux-video-index.component';

describe('JeuxVideoIndexComponent', () => {
  let component: JeuxVideoIndexComponent;
  let fixture: ComponentFixture<JeuxVideoIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuxVideoIndexComponent]
    });
    fixture = TestBed.createComponent(JeuxVideoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
