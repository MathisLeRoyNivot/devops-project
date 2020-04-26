import { Module } from '@nestjs/common';
import { AutomatonService } from './automaton.service';
import { AutomatonController } from './automaton.controller';

@Module({
  providers: [AutomatonService],
  controllers: [AutomatonController]
})
export class AutomatonModule {}
