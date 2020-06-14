import { TestBed } from '@angular/core/testing';

import { PokemonAdapterService } from './pokemon-adapter.service';

describe('PokemonAdapterService', () => {
  let service: PokemonAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
