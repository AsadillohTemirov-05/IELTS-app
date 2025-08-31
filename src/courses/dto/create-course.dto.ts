import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCourseDto {


  @IsString()
  slug: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  icon: string;

  @IsString()
  level: string;

  @IsNumber()
  lessons: number;

  @IsString()
  duration: string;

  @IsNumber()
  progress: number;

  @IsString()
  color: string;

  @IsString()
  progressColor: string;
}