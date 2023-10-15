import { IsNotEmpty, IsString } from 'class-validator';

// TODO:: And error messages
export class LoginRequestDTO {
  @IsNotEmpty({ message: 'User name is required' })
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginResponseDTO {
  @IsNotEmpty({ message: 'User name is required' })
  @IsString()
  username: string;
}
