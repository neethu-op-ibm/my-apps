import { TestBed } from '@angular/core/testing';

import { StoriesManagementService } from './stories-management.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('StoriesManagementService', () => {
  let service: StoriesManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
    });
    service = TestBed.inject(StoriesManagementService);
  });

  it('should be created', () => {
    service.getStories();
    expect(service).toBeTruthy();
  });
});
