import { Test, TestingModule } from '@nestjs/testing';
import { AutomatonService } from './automaton.service';

describe('AutomatonService', () => {
  let service: AutomatonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomatonService],
    }).compile();

    service = module.get<AutomatonService>(AutomatonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
