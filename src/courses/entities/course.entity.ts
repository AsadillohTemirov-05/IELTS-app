import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Course extends Document {
  @Prop({ required: true })
  part: string; 

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  icon: string;

  @Prop({ required: true })
  level: string;

  @Prop({ required: true })
  lessons: number;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  progress: number;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  progressColor: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);