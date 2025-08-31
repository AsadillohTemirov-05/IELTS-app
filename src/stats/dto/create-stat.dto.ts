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



export class UpdateStatDto{

  icon?:string;
  value?:string;
  label?:string;
  color?:string;
}