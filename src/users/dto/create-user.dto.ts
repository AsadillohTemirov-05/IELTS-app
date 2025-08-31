import { IsString, IsEmail, IsBoolean, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsBoolean()
  agreeTerms: boolean;

  @IsString()
  @MinLength(6)
  password: string;
}