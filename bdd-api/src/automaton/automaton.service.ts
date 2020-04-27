import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Data } from '../data/data.entity';

@Injectable()
export class AutomatonService {

    constructor(@InjectRepository(Data) private dataRepository: Repository<Data>) { }

    async getData(unit_id: number, automaton_id: number): Promise<Data[]> {
        return await this.dataRepository.find({
            where: { unit_num: unit_id, automaton_num: automaton_id}
        });
    }
}
