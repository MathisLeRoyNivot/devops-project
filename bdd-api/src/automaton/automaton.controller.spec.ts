import { Test, TestingModule } from '@nestjs/testing';
import { AutomatonController } from './automaton.controller';

describe('Automaton Controller', () => {
  let controller: AutomatonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomatonController],
    }).compile();

    controller = module.get<AutomatonController>(AutomatonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
