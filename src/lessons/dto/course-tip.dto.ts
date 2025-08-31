import { IsString, IsArray, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class TipDto {
  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsString()
  @IsNotEmpty()
  color: string;
}

export class CreateCourseTipDto {
  @IsString()
  @IsNotEmpty()
  part: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @Type(() => TipDto)
  @IsNotEmpty({ each: true })
  tips: TipDto[];
}

export class UpdateCourseTipDto {
  @IsString()
  @IsNotEmpty()
  part?: string;

  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsArray()
  @Type(() => TipDto)
  @IsNotEmpty({ each: true })
  tips?: TipDto[];
}