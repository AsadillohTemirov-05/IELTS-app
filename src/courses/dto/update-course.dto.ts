import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateCourseDto {
 

  @IsString()
  @IsOptional()
  slug?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsString()
  @IsOptional()
  level?: string;

  @IsNumber()
  @IsOptional()
  lessons?: number;

  @IsString()
  @IsOptional()
  duration?: string;


  @IsNumber()
  @IsOptional()
  progress?: number;

  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  progressColor?: string;
}