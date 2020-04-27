import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Data } from '../data/data.entity';

@Injectable()
export class UnitService {

    constructor(@InjectRepository(Data) private dataRepository: Repository<Data>) { }

    async getUnitsData(): Promise<Data[]> {
        return await this.dataRepository.find();
    }
}
