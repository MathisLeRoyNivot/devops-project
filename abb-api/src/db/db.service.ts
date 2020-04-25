import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as fs from 'fs';


@Injectable()
export class DbService {
    private db: any;

    // Initialize Connection to Firebase
    constructor() {
        admin.initializeApp(functions.config().firebase);
        this.db = admin.firestore();
    }

    async addUser(user: User) {
        // Create Hashed password
        const bcrypt = require('bcrypt');
        const hashedPassword = String(bcrypt.hashSync(user.getPassword(), 10));

        console.log(user);

        await this.db.collection('users').add({
            user_id: user.getUserId(),
            username: user.getUsername(),
            password: hashedPassword,
            roles: user.getRoles()
        }).then(ref => {
            console.log('Added document with ID: ', ref.id);
        });
    }

    // Retrieve all Users
    async getUsers() {
        let users: Array<JSON> = [];

        // Request to Database
        await this.db.collection('users').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    // Create User and store in Array
                    let user = new User(doc.get("username"), doc.get("password"), doc.get("roles"), doc.get("user_id"));
                    users.push(JSON.parse(JSON.stringify(user)));
                });
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });

        // Return users
        return users;
    }

    // Retrieve User by Name
    async getUserByName(username: String) {
        let user: JSON;
        let data: User;

        // Request to Database
        await this.db.collection('users').where('username', '==', username).get()
            .then((snapshot) => {
                if (snapshot.empty) {
                    return;
                }

                snapshot.forEach(doc => {
                    // Create User and store in Array
                    data = new User(doc.data().username, doc.data().password, doc.data().roles, doc.data().user_id);
                    user = JSON.parse(JSON.stringify(data));
                });
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });

        // Retrieve Users
        return user;
    }

    // Retrieve User by Id
    async getUserById(id: String) {
        let user: JSON;

        // Request to Database
        await this.db.collection('users').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    if (doc.data().user_id == id) {
                        // Create User and stor in Array
                        let data = new User(doc.data().username, doc.data().password, doc.data().roles, doc.data().user_id);
                        user = JSON.parse(JSON.stringify(data));
                    }
                });
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });

        // Retrieve User
        return user;
    }

    // Retrieve User by Id
    async removeUserById(id: string) {
        let user: JSON;

        await this.db.collection('users').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    if (doc.data().user_id == id) {
                        console.log(doc.user_id);
                        console.log(id);
                        let data = new User(doc.data().username, doc.data().password, doc.data().roles, doc.data().user_id);
                        user = JSON.parse(JSON.stringify(data));

                        doc.ref.delete();
                        console.log('User Succesfully deleted');
                    }
                });
            })
            .catch((err) => {
                console.log('Error deleting document', err);
            });

        // Retrieve User
        return user;
    }
}
