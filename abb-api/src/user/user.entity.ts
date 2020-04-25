import { v4 as uuidv4 } from 'uuid';

export class User {
    public user_id: String;
    public username: String;
    public password: String;
    public roles: Array<String>;

    constructor(username: String, password: String, roles: Array<String>, user_id: String = uuidv4()) {
        this.username = username;
        this.password = password;
        this.roles = roles;
        this.user_id = user_id;
    }

    getUserId() {
        return this.user_id;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getRoles() {
        return this.roles;
    }

    setPassword(password: String) {
        this.password = password;
    }

    setRoles(roles: Array<String>) {
        this.roles = roles;
    }
}