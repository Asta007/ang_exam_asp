import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxVideoShowComponent } from './jeux-video-show.component';

describe('JeuxVideoShowComponent', () => {
  let component: JeuxVideoShowComponent;
  let fixture: ComponentFixture<JeuxVideoShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuxVideoShowComponent]
    });
    fixture = TestBed.createComponent(JeuxVideoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
