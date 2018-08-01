import {Guid} from 'guid-typescript';
export class User {
  id: Guid;
  name: string | null;
  constructor(user: any) {
    this.id = user.id;
    this.name = user.name;
  }
}
