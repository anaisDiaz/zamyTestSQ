import { TestBed, inject } from '@angular/core/testing';

import { FirebaseDatabaseService } from './firebase-database.service';

describe('FirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseDatabaseService]
    });
  });

  it('should be created', inject([FirebaseDatabaseService], (service: FirebaseDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
