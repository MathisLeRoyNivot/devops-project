import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UnitService } from './unit/unit.service';
import { AutomatonService } from './automaton/automaton.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly unitService: UnitService,
    private readonly automatonService: AutomatonService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getAutomatonsData() {
    return this.automatonService.getData();
  }
}
