import {Guid} from 'guid-typescript';
import {User} from './user';

export class Bulletin {
  id: Guid;
  number: number | null;
  userId: Guid | null;
  user: User;
  get userName(): string {
    return this.user.name;
  }
  content: string | null;
  rating: number | null;
  createdUtc: Date | null;
  constructor(model: any) {
    this.id = model.id;
    this.number = model.number;
    this.userId = model.userId;
    this.user = model.user;
    this.content = model.content;
    this.rating = model.rating;
    this.createdUtc = model.createdUtc || new Date();
  }
}
