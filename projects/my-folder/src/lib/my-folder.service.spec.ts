import { TestBed } from '@angular/core/testing';

import { MyFolderService } from './my-folder.service';

describe('MyFolderService', () => {
  let service: MyFolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
