import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomatonService } from './automaton.service';
import { AutomatonController } from './automaton.controller';
import { Data } from '../data/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data])],
  providers: [AutomatonService],
  controllers: [AutomatonController]
})
export class AutomatonModule {}
