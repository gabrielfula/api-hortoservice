import { IsEmail, IsNotEmpty } from 'class-validator';

export class authenticationDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}