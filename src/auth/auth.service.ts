import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginRequestDTO, LoginResponseDTO } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  //TODO:: Implement password hashing & JWT tokens
  async login(loginDto: LoginRequestDTO): Promise<LoginResponseDTO> {
    const user = await this.userService.getUser(loginDto.username);
    if (!user) throw new NotFoundException();
    if (user.password !== loginDto.password) throw new UnauthorizedException();
    return { username: user.username };
  }
}
