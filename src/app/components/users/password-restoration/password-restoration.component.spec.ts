import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRestorationComponent } from './password-restoration.component';

describe('PasswordRestorationComponent', () => {
  let component: PasswordRestorationComponent;
  let fixture: ComponentFixture<PasswordRestorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRestorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRestorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
