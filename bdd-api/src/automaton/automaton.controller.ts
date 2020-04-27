import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { AutomatonService } from './automaton.service';
import { Data } from '../data/data.entity';

@Controller('automaton')
export class AutomatonController {

    constructor(private automatonService: AutomatonService) { }

    @Get(':unit_id/:automaton_id')
    getAutomaton(@Param() params) {
        this.automatonService.getData(params.unit_id, params.automaton_id).then((value) => {
            console.log(value);
        });
        return this.automatonService.getData(params.unit_id, params.automaton_id);
    }

    @Get('')
    getAutomatons() {
        return this.automatonService.getAutomatons();
    }

    // @Post()
    // create(@Body() user: User) {
    //     return this.service.createUser(user);
    // }
}
