import { TestBed } from '@angular/core/testing';

import { PokeService } from './pokeservice.service';

describe('PokeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeService = TestBed.get(PokeService);
    expect(service).toBeTruthy();
  });
});
