import { Controller, Post, Body, Get, Put, Delete,Param } from '@nestjs/common';
import { UnitService } from './unit.service';


@Controller('unit')
export class UnitController {
    constructor(private unitService: UnitService) {}

    @Get('')
    getUnitsData(@Param() params) {
        return this.unitService.getUnitsData();
    }
}
