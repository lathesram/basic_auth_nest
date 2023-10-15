import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly users: User[] = [
    {
      userId: '1',
      username: 'John',
      password: '123',
    },
    {
      userId: '2',
      username: 'Wick',
      password: '456',
    },
  ];

  async getUser(username: string): Promise<User | undefined> {
    return this.users.find(
      (user) =>
        user.username.toLowerCase().trim() ===
        username.toLocaleLowerCase().trim(),
    );
  }
}
