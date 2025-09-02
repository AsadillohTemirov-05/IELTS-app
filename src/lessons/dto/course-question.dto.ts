import { IsString, IsArray, IsNumber, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateCourseQuestionDto {
  @IsString()
  @IsNotEmpty()
  part: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  question: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  options: string[];

  @IsNumber()
  @Min(0)
  @Max(3)
  correctAnswer: number;
}

export class UpdateCourseQuestionDto {
  @IsString()
  @IsNotEmpty()
  part?: string;

  @IsString()
  @IsNotEmpty()
  icon?: string;

  @IsString()
  @IsNotEmpty()
  color?: string;

  @IsString()
  @IsNotEmpty()
  subject?: string;

  @IsString()
  @IsNotEmpty()
  question?: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  options?: string[];

  @IsNumber()
  @Min(0)
  @Max(3)
  correctAnswer?: number;
}