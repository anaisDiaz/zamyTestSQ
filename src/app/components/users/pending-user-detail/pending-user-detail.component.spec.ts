import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingUserDetailComponent } from './pending-user-detail.component';

describe('PendingUserDetailComponent', () => {
  let component: PendingUserDetailComponent;
  let fixture: ComponentFixture<PendingUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
