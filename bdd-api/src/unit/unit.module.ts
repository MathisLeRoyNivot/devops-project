import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { Data } from '../data/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data])],
  providers: [UnitService],
  controllers: [UnitController]
})
export class UnitModule {}
