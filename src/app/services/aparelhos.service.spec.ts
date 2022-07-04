/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AparelhosService } from './aparelhos.service';

describe('Service: Aparelhos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AparelhosService]
    });
  });

  it('should ...', inject([AparelhosService], (service: AparelhosService) => {
    expect(service).toBeTruthy();
  }));
});
