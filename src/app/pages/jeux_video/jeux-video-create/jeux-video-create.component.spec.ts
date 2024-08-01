import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxVideoCreateComponent } from './jeux-video-create.component';

describe('JeuxVideoCreateComponent', () => {
  let component: JeuxVideoCreateComponent;
  let fixture: ComponentFixture<JeuxVideoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuxVideoCreateComponent]
    });
    fixture = TestBed.createComponent(JeuxVideoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
