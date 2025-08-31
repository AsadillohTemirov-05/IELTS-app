import { Type } from 'class-transformer';
import { IsString, IsArray, IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class ContentItemDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['section', 'definition', 'tip', 'example'])
  type: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsString()
  @IsOptional()
  color?: string;
}

export class CreateCourseContentDto {
  @IsString()
  @IsNotEmpty()
  part: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @Type(() => ContentItemDto)
  @IsNotEmpty({ each: true })
  content: ContentItemDto[];
}

export class UpdateCourseContentDto {
  @IsString()
  @IsNotEmpty()
  part?: string;

  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsArray()
  @Type(() => ContentItemDto)
  @IsNotEmpty({ each: true })
  content?: ContentItemDto[];
}