import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { User } from './user.entity';

@Injectable()
export class UserService {
    // Static User insertion
    constructor(
        private readonly dbService: DbService
    ) {}

    addOne(username: String, password: String, roles: Array<String>) {
        let newUser = new User(username, password, roles);
        return this.dbService.addUser(newUser);
    }

    findOneById(id: string) {
        return this.dbService.getUserById(id);
    }
    
    findOneByName(username: string) {
        return this.dbService.getUserByName(username);
    }

    findAll() {
        return this.dbService.getUsers();
    }

    removeOneById(id: string) {
        return this.dbService.removeUserById(id);
    }
}
