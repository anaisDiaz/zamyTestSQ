import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingUsersListComponent } from './pending-users-list.component';

describe('PendingUsersListComponent', () => {
  let component: PendingUsersListComponent;
  let fixture: ComponentFixture<PendingUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
