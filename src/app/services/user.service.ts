import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }
}
