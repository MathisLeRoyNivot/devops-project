import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomatonModule } from './automaton/automaton.module';
import { UnitModule } from './unit/unit.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AutomatonModule, 
    UnitModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
