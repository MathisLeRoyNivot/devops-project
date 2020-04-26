import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomatonModule } from './automaton/automaton.module';
import { UnitModule } from './unit/unit.module';

@Module({
  imports: [AutomatonModule, UnitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
