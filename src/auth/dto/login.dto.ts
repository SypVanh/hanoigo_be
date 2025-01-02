import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

//Define a "type" of "authentication request"
export class LoginDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
