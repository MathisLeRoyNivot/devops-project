import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data } from '../data/data.entity';

@Injectable()
export class AutomatonService {

    constructor(@InjectRepository(Data) private dataRepository: Repository<Data>) { }

    async getAutomatons(): Promise<Data[]> {
        return await this.dataRepository.find();
    }

    async getData(unit_id: number, automaton_id): Promise<Data[]> {
        return await this.dataRepository.find({
            where: [{ "unit_id": unit_id, "automaton_id": automaton_id}]
        });
    }
}
