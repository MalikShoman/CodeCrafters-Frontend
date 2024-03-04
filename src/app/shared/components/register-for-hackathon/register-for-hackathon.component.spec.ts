import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForHackathonComponent } from './register-for-hackathon.component';

describe('RegisterForHackathonComponent', () => {
  let component: RegisterForHackathonComponent;
  let fixture: ComponentFixture<RegisterForHackathonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterForHackathonComponent]
    });
    fixture = TestBed.createComponent(RegisterForHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
