import { IsString } from 'class-validator';

export class CreateStatDto {
  @IsString()
  icon: string;

  @IsString()
  value: string;

  @IsString()
  label: string;

  @IsString()
  color: string;
}