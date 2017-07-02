import { TestBed, inject } from '@angular/core/testing';

import { GetCharactersService } from './get-characters.service';

describe('GetCharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCharactersService]
    });
  });

  it('should be created', inject([GetCharactersService], (service: GetCharactersService) => {
    expect(service).toBeTruthy();
  }));
});
