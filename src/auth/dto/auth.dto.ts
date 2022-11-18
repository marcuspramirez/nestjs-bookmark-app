import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// These fields will be used to signup and sign in
// Decorators are on top
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
