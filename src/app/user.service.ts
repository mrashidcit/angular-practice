import { Injectable } from '@angular/core';

export class User {
    constructor(
        public name: string,
        public isAuthorized = false){ }

}

// Todo: get the user; don't 'new' it.
let alic = new User('Alice', true);
let bob = new User('Bob', false);

@Injectable()
export class UserService {
    user = alic; // initial user is Bob

    // swap users
    getNewUser(){
        return this.user = this.user === bob ? alic : bob;
    }
}