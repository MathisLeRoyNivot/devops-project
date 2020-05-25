import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AutomatonService } from './automaton.service';

describe('AutomatonService', () => {
  let service: AutomatonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AutomatonService);
  });

  it('Should get correct data', () => {
    expect(service.getData(1, 5)).toBeTruthy();
  });
});
